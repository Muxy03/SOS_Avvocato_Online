<script lang="ts">
	import '../app.css';
	import { onMount, setContext } from 'svelte';
	import {
		onAuthStateChanged,
		setPersistence,
		browserLocalPersistence,
		type User
	} from 'firebase/auth';
	import firebase from '$lib/firebase';
	import { clearUserDataLocally, loadUserDataLocally, saveUserDataLocally } from '$lib/Locally';
	import { navigating } from '$app/state';

	let { children } = $props();

	const isOnline = $state({ value: true });
	const user: { value: User | null } = $state({ value: null });
	const error = $state({ value: '' });
	const isLoading = $state({ value: navigating.complete !== null });

	setContext('App', {
		isOnline,
		isLoading,
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
				saveUserDataLocally(authUser);
			} else {
				clearUserDataLocally();
			}
		});

		updateOnlineStatus();
		window.addEventListener('online', updateOnlineStatus);
		window.addEventListener('offline', updateOnlineStatus);

		if (!isOnline) {
			loadUserDataLocally();
		}

		return () => {
			unsubscribe();
			window.removeEventListener('online', updateOnlineStatus);
			window.removeEventListener('offline', updateOnlineStatus);
		};
		// Controlla se l'app è in modalità standalone (installata)
	});
</script>

<div class="flex min-h-screen min-w-screen flex-col items-center justify-center">
	{@render children()}
</div>
