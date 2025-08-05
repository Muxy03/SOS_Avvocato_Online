<script lang="ts">
	import { navigating } from '$app/state';
	import type { AppContext, UserData } from '$lib';
	import LoadingPage from '$lib/components/LoadingPage.svelte';
	import firebase from '$lib/firebase';
	import { clearUserSession, getInitials } from '$lib/Locally';
	import { Online } from '$lib/shared.svelte.js';
	import { signOut } from 'firebase/auth';
	import { getContext, onMount } from 'svelte';

	let { data } = $props();

	// const isOnline = $state({ value: true });
	const rememberMe = $state({ value: true });
	let user: { value: UserData | undefined } = $state({ value: undefined });
	let error = $state({ value: '' });
	const isLoading: { value: boolean | undefined } = $state({ value: navigating.complete !== null });

	isLoading.value = navigating.complete !== null;
	user.value = data as UserData;

	async function handleSignOut() {
		try {
			await signOut(firebase.auth);
			await clearUserSession();
			user.value = undefined;
		} catch (_) {
			if (!Online.value) {
				// Logout offline
				user.value = undefined;
				await clearUserSession();
			} else {
				error.value = 'Errore durante la disconnessione. Riprova.';
			}
		}
	}

	const reload = () => {
		window.location.reload();
	};

	async function setUser() {
		const response = await fetch('/api/session', {
			method: 'GET',
			credentials: 'same-origin'
		});

		if (response.status === 200) {
			const userSession = await response.json();
			user.value = userSession;
		}
	}

	onMount(() => {
		error = getContext('App');
		setUser();
	});
</script>

{#if !Online.value}
	<div class="offline-banner">
		<span class="offline-icon">📶</span>
		Modalità offline
	</div>
{/if}

{#if isLoading.value}
	<LoadingPage />
{:else if user.value !== undefined}
	<div
		class="animate-slideUp mx-auto flex h-[250px] w-[300px] flex-col items-center justify-center gap-4 rounded-2xl bg-white text-gray-900 shadow-2xl"
	>
		<h1 class="text-3xl font-extrabold tracking-tight text-gray-800">Bentornato!</h1>

		<div class="flex flex-col items-center justify-center gap-4">
			<div class="flex flex-col items-center gap-5 text-center">
				{#if !Online.value}
					<div
						class="flex items-center justify-center gap-2 rounded-xl bg-yellow-100 text-center text-sm text-yellow-800"
					>
						<span class="rounded bg-yellow-500 text-xs font-semibold text-white">Offline</span>
						Dati memorizzati localmente
					</div>
				{/if}

				{#await setUser()}
					<p>LOADING...</p>
				{:then _}
					<a
						href="/home"
						target="_self"
						rel="noopener noreferrer"
						aria-label="/home"
						class="w-full"
					>
						<div class="flex h-[60px] w-[280px] items-center gap-1 rounded-2xl bg-blue-500">
							<div
								class="flex-1/4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white"
							>
								{getInitials(user.value.FullName, user.value.email)}
							</div>
							<div class="flex-3/4 w-full text-center">
								<h2 class="break-words text-xl font-bold text-white">
									{user.value.FullName}
								</h2>
								<p class="break-all text-sm text-white">{user.value.email}</p>
							</div>
						</div>
					</a>
				{/await}
			</div>
		</div>

		<div class="flex flex-col gap-4">
			<button
				type="button"
				class="rounded-xl border-2 border-gray-200 bg-gray-100 px-6 py-4 text-base font-semibold text-slate-600 transition hover:border-gray-300 hover:bg-gray-200"
				onclick={async () => {
					await handleSignOut();
					reload();
				}}
			>
				Disconnetti
			</button>
		</div>
	</div>
{/if}
