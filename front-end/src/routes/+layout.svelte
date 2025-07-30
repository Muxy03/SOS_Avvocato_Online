<script lang="ts">
	import '../app.css';
	import { onDestroy, onMount, setContext } from 'svelte';
	import {
		onAuthStateChanged,
		setPersistence,
		browserLocalPersistence,
		type User
	} from 'firebase/auth';
	import firebase from '$lib/firebase';
	import { clearUserSession, getUserSession, storeUserSession } from '$lib/Locally';
	import { navigating } from '$app/state';

	let { children } = $props();

	const isOnline = $state({ value: true });
	const rememberMe = $state({ value: true });
	let user: { value: User | null } = $state({ value: null });
	const error = $state({ value: '' });
	const isLoading = $state({ value: navigating.complete !== null });

	setContext('App', {
		isOnline,
		isLoading,
		rememberMe,
		user,
		error
	});

	function updateOnlineStatus() {
		isOnline.value = navigator.onLine;
	}

	onMount(() => {
		if ('serviceWorker' in navigator) {
			addEventListener('load', function () {
				navigator.serviceWorker.register('../service-worker.js');
			});
		}
		async () => {
			try {
				await setPersistence(firebase.auth, browserLocalPersistence);
			} catch (err) {
				console.warn('Could not set auth persistence:', err);
			}
		};

		const unsubscribe = onAuthStateChanged(firebase.auth, (authUser) => {
			if (authUser) {
				user.value = authUser;
				storeUserSession(authUser);
			} else {
				clearUserSession();
			}
		});

		updateOnlineStatus();
		window.addEventListener('online', updateOnlineStatus);
		window.addEventListener('offline', updateOnlineStatus);

		if (!isOnline) {
			async () => {
				const session = await getUserSession();
				if (session) {
					user.value = session;
				} else {
					user.value = null;
				}
			};
		}

		return () => {
			unsubscribe();
			window.removeEventListener('online', updateOnlineStatus);
			window.removeEventListener('offline', updateOnlineStatus);
		};
		// Controlla se l'app è in modalità standalone (installata)
	});

	onDestroy(() => {
		if (!rememberMe.value) {
			(async () => {
				await fetch('/api/session', {
					method: 'DELETE',
					credentials: 'same-origin',
					headers: { 'Content-Type': 'application/json' },
					body: ''
				});
			})();
		}
	});
</script>

<div class="flex min-h-screen min-w-screen flex-col items-center justify-center bg-blue-900">
	{@render children()}
</div>
