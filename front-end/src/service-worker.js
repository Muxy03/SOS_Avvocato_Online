// src/service-worker.js
import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

// Assets to cache on install
const ASSETS = [
	...build, // the app itself
	...files  // everything in static
];

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			const response = await cache.match(url.pathname);

			if (response) {
				return response;
			}
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			// if we're offline, fetch can return a value that is not a Response
			// instead of throwing - and we can't pass this non-Response to respondWith
			if (!(response instanceof Response)) {
				throw new Error('invalid response from fetch');
			}

			if (response.status === 200) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch (err) {
			const response = await cache.match(event.request);

			if (response) {
				return response;
			}

			// if there's no cache, then just error out
			// as there is nothing we can do to respond to this request
			throw err;
		}
	}

	event.respondWith(respond());
});

self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
});

// Optional: Add background sync for offline actions
self.addEventListener('sync', (event) => {
	if (event.tag === 'background-sync') {
		event.waitUntil(doBackgroundSync());
	}
});

async function doBackgroundSync() {
	// Handle offline actions when connection is restored
	// Example: sync form submissions, send analytics, etc.
	console.log('Background sync triggered');
}

// Optional: Add push notification support
self.addEventListener('push', (event) => {
	if (event.data) {
		const data = event.data.json();
		
		const options = {
			body: data.body,
			icon: data.icon || '/favicon.png',
			badge: '/badge.png',
			vibrate: [100, 50, 100],
			data: data.data,
			actions: data.actions
		};

		event.waitUntil(
			self.registration.showNotification(data.title, options)
		);
	}
});

self.addEventListener('notificationclick', (event) => {
	event.notification.close();

	if (event.action === 'open_url' && event.notification.data.url) {
		event.waitUntil(
			clients.openWindow(event.notification.data.url)
		);
	}
});

// Additional utilities for advanced service worker features

// Cache management utilities
// const cacheUtils = {
// 	async cleanupOldCaches(keepCaches = [CACHE]) {
// 		const cacheNames = await caches.keys();
// 		const oldCaches = cacheNames.filter(name => !keepCaches.includes(name));
		
// 		await Promise.all(
// 			oldCaches.map(cacheName => caches.delete(cacheName))
// 		);
// 	},

// 	async getCacheSize(cacheName = CACHE) {
// 		const cache = await caches.open(cacheName);
// 		const keys = await cache.keys();
		
// 		let size = 0;
// 		for (const key of keys) {
// 			const response = await cache.match(key);
// 			if (response) {
// 				const blob = await response.blob();
// 				size += blob.size;
// 			}
// 		}
		
// 		return size;
// 	}
// };

// Network-first strategy for API calls
// async function networkFirst(request) {
// 	const cache = await caches.open(CACHE);
	
// 	try {
// 		const response = await fetch(request);
// 		if (response.ok) {
// 			cache.put(request, response.clone());
// 		}
// 		return response;
// 	} catch (error) {
// 		const cachedResponse = await cache.match(request);
// 		if (cachedResponse) {
// 			return cachedResponse;
// 		}
// 		throw error;
// 	}
// }

// // Cache-first strategy for static assets
// async function cacheFirst(request) {
// 	const cache = await caches.open(CACHE);
// 	const cachedResponse = await cache.match(request);
	
// 	if (cachedResponse) {
// 		return cachedResponse;
// 	}
	
// 	const response = await fetch(request);
// 	if (response.ok) {
// 		cache.put(request, response.clone());
// 	}
	
// 	return response;
// }