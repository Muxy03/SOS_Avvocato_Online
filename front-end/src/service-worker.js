// src/service-worker.js
import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

// Assets to cache on install
const ASSETS = [
	...build, // the app itself
	...files // everything in static
];

const API_CACHE_NAME = 'sos-avvocato-api-v1';
const OFFLINE_QUEUE_NAME = 'sos-avvocato-offline-queue';

// API endpoints that should be cached
const CACHEABLE_API_PATTERNS = [/\/api\/session/, /\/api\/emails/];

// API endpoints that should be queued when offline
const QUEUEABLE_API_PATTERNS = [/\/api\/session/, /\/api\/emails/];

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	console.log('Service Worker activating...');

	event.waitUntil(
		Promise.all([
			// Clean up old caches
			caches.keys().then((cacheNames) => {
				return Promise.all(
					cacheNames.map((cacheName) => {
						if (cacheName !== CACHE && cacheName !== API_CACHE_NAME) {
							console.log('Deleting old cache:', cacheName);
							return caches.delete(cacheName);
						}
					})
				);
			}),
			// Take control of all pages
			self.clients.claim()
		])
	);
});

// self.addEventListener('fetch', (event) => {
// 	const { request } = event;
// 	const url = new URL(request.url);

// 	// Handle API requests
// 	if (url.pathname.startsWith('/api/')) {
// 		event.respondWith(handleApiRequest(request));
// 		return;
// 	}

// 	// Handle static assets
// 	event.respondWith(handleStaticRequest(request));
// });

// // Handle API requests with caching and offline queue
// async function handleApiRequest(request) {
// 	const url = new URL(request.url);
// 	const method = request.method;

// 	// Check if this API should be cached (only GET requests can be cached)
// 	const shouldCache =
// 		method === 'GET' && CACHEABLE_API_PATTERNS.some((pattern) => pattern.test(url.pathname));

// 	// Check if this API should be queued when offline
// 	const shouldQueue = QUEUEABLE_API_PATTERNS.some((pattern) => pattern.test(url.pathname));

// 	try {
// 		// Try network first
// 		const networkResponse = await fetch(request);

// 		// Cache successful GET requests only (Cache API only supports GET requests)
// 		if (shouldCache && networkResponse.ok) {
// 			const cache = await caches.open(API_CACHE_NAME);
// 			cache.put(request, networkResponse.clone());
// 		}

// 		return networkResponse;
// 	} catch (error) {
// 		console.log('Network request failed:', error);

// 		// For GET requests, try to serve from cache
// 		if (shouldCache) {
// 			const cachedResponse = await caches.match(request);
// 			if (cachedResponse) {
// 				console.log('Serving from cache:', request.url);
// 				return cachedResponse;
// 			}
// 		}

// 		// For POST/PUT/DELETE requests, queue them for later
// 		if ((method === 'POST' || method === 'PUT' || method === 'DELETE') && shouldQueue) {
// 			await queueOfflineRequest(request);

// 			// Return a custom response indicating the request was queued
// 			return new Response(
// 				JSON.stringify({
// 					success: true,
// 					message: 'Request queued for when online',
// 					queued: true,
// 					timestamp: Date.now()
// 				}),
// 				{
// 					status: 202,
// 					headers: { 'Content-Type': 'application/json' }
// 				}
// 			);
// 		}

// 		// Return offline response for other cases
// 		return new Response(
// 			JSON.stringify({
// 				error: 'Offline',
// 				message: 'You are currently offline. Please try again when connected.',
// 				offline: true
// 			}),
// 			{
// 				status: 503,
// 				headers: { 'Content-Type': 'application/json' }
// 			}
// 		);
// 	}
// }

// // Handle static asset requests
// async function handleStaticRequest(request) {
// 	// Try cache first for static assets
// 	const cachedResponse = await caches.match(request);
// 	if (cachedResponse) {
// 		return cachedResponse;
// 	}

// 	const networkResponse = await fetch(request);

// 	// Cache successful responses
// 	if (networkResponse.ok) {
// 		const cache = await caches.open(CACHE);
// 		if (request.method !== 'POST') cache.put(request, networkResponse.clone());
// 	}

// 	return networkResponse;
// }

// // Initialize offline queue in IndexedDB
// async function initializeOfflineQueue() {
// 	return new Promise((resolve, reject) => {
// 		const request = indexedDB.open(OFFLINE_QUEUE_NAME, 1);

// 		request.onerror = () => reject(request.error);
// 		request.onsuccess = () => resolve(request.result);

// 		request.onupgradeneeded = (event) => {
// 			const db = event.target.result;

// 			if (!db.objectStoreNames.contains('requests')) {
// 				const store = db.createObjectStore('requests', {
// 					keyPath: 'id',
// 					autoIncrement: true
// 				});
// 				store.createIndex('timestamp', 'timestamp', { unique: false });
// 			}
// 		};
// 	});
// }

// // Queue offline requests
// async function queueOfflineRequest(request) {
// 	try {
// 		const db = await initializeOfflineQueue();
// 		const transaction = db.transaction(['requests'], 'readwrite');
// 		const store = transaction.objectStore('requests');

// 		// Convert request to serializable format
// 		const requestData = {
// 			url: request.url,
// 			method: request.method,
// 			headers: Object.fromEntries(request.headers.entries()),
// 			body: request.method !== 'GET' ? await request.text() : null,
// 			timestamp: Date.now()
// 		};

// 		await new Promise((resolve, reject) => {
// 			const addRequest = store.add(requestData);
// 			addRequest.onsuccess = () => resolve();
// 			addRequest.onerror = () => reject(addRequest.error);
// 		});

// 		console.log('Request queued for offline sync:', requestData);
// 	} catch (error) {
// 		console.error('Failed to queue offline request:', error);
// 	}
// }

// // Process offline queue when back online
// async function processOfflineQueue() {
// 	try {
// 		const db = await initializeOfflineQueue();
// 		const transaction = db.transaction(['requests'], 'readwrite');
// 		const store = transaction.objectStore('requests');

// 		const getAllRequest = store.getAll();

// 		getAllRequest.onsuccess = async () => {
// 			const queuedRequests = getAllRequest.result;

// 			for (const requestData of queuedRequests) {
// 				try {
// 					// Reconstruct the request
// 					const request = new Request(requestData.url, {
// 						method: requestData.method,
// 						headers: requestData.headers,
// 						body: requestData.body
// 					});

// 					// Try to send the request
// 					const response = await fetch(request);

// 					if (response.ok) {
// 						// Remove from queue on success
// 						const deleteTransaction = db.transaction(['requests'], 'readwrite');
// 						const deleteStore = deleteTransaction.objectStore('requests');
// 						deleteStore.delete(requestData.id);

// 						console.log('Offline request processed successfully:', requestData.url);

// 						// Notify the app about successful sync
// 						self.clients.matchAll().then((clients) => {
// 							clients.forEach((client) => {
// 								client.postMessage({
// 									type: 'OFFLINE_REQUEST_SYNCED',
// 									data: requestData
// 								});
// 							});
// 						});
// 					}
// 				} catch (error) {
// 					console.error('Failed to process offline request:', error);
// 					// Keep in queue for next sync attempt
// 				}
// 			}
// 		};
// 	} catch (error) {
// 		console.error('Failed to process offline queue:', error);
// 	}
// }

// // Listen for online events to process queue
// self.addEventListener('message', (event) => {
// 	if (event.data && event.data.type === 'ONLINE') {
// 		console.log('App came online, processing offline queue...');
// 		processOfflineQueue();
// 	}
// });

// // Background sync (if supported)
// self.addEventListener('sync', (event) => {
// 	if (event.tag === 'offline-requests') {
// 		event.waitUntil(processOfflineQueue());
// 	}
// });

// // Handle push notifications (if needed for the lawyer consultation app)
// self.addEventListener('push', (event) => {
// 	if (event.data) {
// 		const data = event.data.json();

// 		const options = {
// 			body: data.body || 'New notification from SOS Avvocato',
// 			icon: '/favicon.ico',
// 			badge: '/favicon.ico',
// 			tag: data.tag || 'general',
// 			data: data.data || {},
// 			actions: data.actions || []
// 		};

// 		event.waitUntil(self.registration.showNotification(data.title || 'SOS Avvocato', options));
// 	}
// });

// // Handle notification clicks
// self.addEventListener('notificationclick', (event) => {
// 	event.notification.close();

// 	event.waitUntil(
// 		self.clients.matchAll({ type: 'window' }).then((clients) => {
// 			// Try to focus existing window
// 			for (const client of clients) {
// 				if (client.url === self.registration.scope && 'focus' in client) {
// 					return client.focus();
// 				}
// 			}

// 			// Open new window if no existing window found
// 			if (self.clients.openWindow) {
// 				return self.clients.openWindow('/');
// 			}
// 		})
// 	);
// });
