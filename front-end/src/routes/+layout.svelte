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
	let user: { value: User | undefined } = $state({ value: undefined });
	const error = $state({ value: '' });
	const isLoading = $state({ value: navigating.complete !== null });

	async function setUser() {
		const response = await fetch('/api/session', {
			method: 'GET',
			credentials: 'same-origin'
		});

		if (response.status === 200) {
			const userSession = await response.json();
		}

		// if (session) {
		// 	user.value = session;
		// } else {
		// 	user.value = undefined;
		// }
	}

	function updateOnlineStatus() {
		isOnline.value = navigator.onLine;
	}

	setContext('App', {
		isOnline,
		isLoading,
		rememberMe,
		user,
		error
	});

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
			}// } else {
			// 	clearUserSession();
			// }
		});

		updateOnlineStatus();
		window.addEventListener('online', updateOnlineStatus);
		window.addEventListener('offline', updateOnlineStatus);

		setUser();

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

<div class="flex h-screen w-screen flex-col gap-5">
	<main class="flex-1 bg-blue-900">
		<div class="flex h-full w-full items-center justify-center">
			{@render children()}
		</div>
	</main>
</div>
