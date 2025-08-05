// import { serverTimestamp } from 'firebase/firestore';
//import type { UserData } from '$lib';
import type { AppContext } from '$lib';
import type { User } from 'firebase/auth';
import { getContext } from 'svelte';

//const { error }: AppContext = getContext('App');

export function getInitials(name: string, email: string) {
	if (name && name.trim()) {
		return name
			.trim()
			.split(' ')
			.map((n) => n[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	}
	return email.charAt(0).toUpperCase();
}

export async function storeUserSession(userInfo: User) {
	const cookie = await getUserSession();

	if (cookie) {
		for (const key in userInfo) {
			if (Object.keys(cookie).includes(key)) {
				cookie[key] = userInfo[key as keyof User];
			}
		}

		await fetch('/api/session', {
			method: 'POST',
			credentials: 'same-origin',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(cookie)
		});
	}
}

export async function clearUserSession() {
	await fetch('/api/session', {
		method: 'DELETE',
		credentials: 'same-origin'
	});
	// Optionally redirect or update UI after logout
}

export async function getUserSession() {
	const response = await fetch('/api/session', {
		method: 'GET',
		credentials: 'same-origin'
	});

	if (response.status === 200) {
		const userSession = await response.json();
		return userSession;
	}

	return null;
}

// Service Worker registration
// Add this to your main Svelte app (e.g., in App.svelte or main.js)

export function registerServiceWorker() {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', async () => {
			try {
				const registration = await navigator.serviceWorker.register('/service-worker.js');

				console.log('Service Worker registered successfully:', registration.scope);

				// Handle updates
				registration.addEventListener('updatefound', () => {
					const newWorker = registration.installing;

					newWorker?.addEventListener('statechange', () => {
						if (newWorker.state === 'installed') {
							if (navigator.serviceWorker.controller) {
								// New content is available, notify user
								showUpdateNotification();
							}
						}
					});
				});

				// Listen for messages from service worker
				navigator.serviceWorker.addEventListener('message', (event) => {
					handleServiceWorkerMessage(event.data);
				});

				// Listen for online/offline events
				window.addEventListener('online', () => {
					console.log('App came online');
					// Notify service worker to process offline queue
					if (navigator.serviceWorker.controller) {
						navigator.serviceWorker.controller.postMessage({
							type: 'ONLINE'
						});
					}
				});

				window.addEventListener('offline', () => {
					console.log('App went offline');
					showOfflineNotification();
				});
			} catch (err) {
				//error.value = `Service Worker registration failed`;
				console.error('Service Worker registration failed:', err);
			}
		});
	} else {
		console.log('Service Worker not supported');
	}
}

// Handle messages from service worker
function handleServiceWorkerMessage(data: { data: unknown; type: string }) {
	switch (data.type) {
		case 'OFFLINE_REQUEST_SYNCED':
			console.log('Offline request synced:', data.data);
			showSyncNotification();
			// You can dispatch custom events here to update your UI
			window.dispatchEvent(
				new CustomEvent('offlineRequestSynced', {
					detail: data.data
				})
			);
			break;

		default:
			console.log('Unknown message from service worker:', data);
	}
}

// UI notification functions
function showUpdateNotification() {
	// You can customize this based on your UI framework
	if (confirm('A new version of the app is available. Reload to update?')) {
		window.location.reload();
	}
}

function showOfflineNotification() {
	// Show offline indicator in your UI
	console.log('App is offline - some features may be limited');

	// You can dispatch a custom event to update your UI
	window.dispatchEvent(new CustomEvent('appOffline'));
}

function showSyncNotification() {
	// Show sync success message
	console.log('Offline requests have been synced');

	// You can dispatch a custom event to update your UI
	window.dispatchEvent(new CustomEvent('offlineRequestsSynced'));
}

// Utility function to check if app is online
export function isOnline() {
	return navigator.onLine;
}

// Utility function to check if request was queued
export function isRequestQueued(response: Response) {
	return (
		response.status === 202 && response.headers.get('content-type')?.includes('application/json')
	);
}

// Enhanced fetch wrapper that works with the service worker
export async function apiCall(url: string, options = { headers: {} }) {
	try {
		const response = await fetch(url, {
			...options,
			headers: {
				'Content-Type': 'application/json',
				...options.headers
			}
		});

		// Check if request was queued due to offline status
		if (response.status === 202) {
			const data = await response.json();
			if (data.queued) {
				console.log('Request queued for offline sync');
				return {
					...data,
					isQueued: true
				};
			}
		}

		// Check if we're getting offline error
		if (response.status === 503) {
			const data = await response.json();
			if (data.offline) {
				// error.value = 'App is offline';
				throw new Error('App is offline');
			}
		}

		return await response.json();
	} catch (err) {
		// error.value = 'API call failed:' + err;
		console.error('API call failed:', err);
		throw err;
	}
}
