<script lang="ts">
	import '../app.css';
	import { onDestroy, onMount } from 'svelte';
	import {
		onAuthStateChanged,
		setPersistence,
		browserLocalPersistence,
		type User
	} from 'firebase/auth';
	import firebase from '$lib/firebase';
	import { registerServiceWorker, storeUserSession } from '$lib/Locally';
	import { navigating } from '$app/state';
	import { Online } from '$lib/shared.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	// const isOnline = $state({ value: true });
	const rememberMe = $state({ value: true });
	let user: { value: User | undefined } = $state({ value: undefined });
	const isLoading = $state({ value: navigating.complete !== null });
	let showModal = $state(false);

	if (page.error) {
		showModal = true;
	}

	async function setUser() {
		const response = await fetch('/api/session', {
			method: 'GET',
			credentials: 'same-origin'
		});

		if (response.status === 200) {
			const userSession = await response.json();
		}
	}

	function updateOnlineStatus() {
		Online.value = navigator.onLine;
	}

	onMount(() => {
		registerServiceWorker();

		async () => {
			try {
				await setPersistence(firebase.auth, browserLocalPersistence);
			} catch (err) {
				// error.value = 'Could not set auth persistence:' + err;
				// console.warn('Could not set auth persistence:', err);
			}
		};

		const unsubscribe = onAuthStateChanged(firebase.auth, (authUser) => {
			if (authUser) {
				user.value = authUser;
				storeUserSession(authUser);
			}
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
