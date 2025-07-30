<script lang="ts">
	import { navigating } from '$app/state';
	import type { AppContext } from '$lib';
	import LoadingPage from '$lib/components/LoadingPage.svelte';
	import firebase from '$lib/firebase';
	import { clearUserSession, getInitials } from '$lib/Locally';
	import { signOut } from 'firebase/auth';
	import { getContext } from 'svelte';

	const { isOnline, isLoading, user, error }: AppContext = getContext('App');

	isLoading.value = navigating.complete !== null;

	async function handleSignOut() {
		try {
			await signOut(firebase.auth);
			clearUserSession();
			user.value = null; // Direct assignment triggers reactivity
		} catch (err) {
			if (!isOnline) {
				// Logout offline
				user.value = null;
				clearUserSession();
			} else {
				error.value = 'Errore durante la disconnessione. Riprova.';
			}
			console.error(err);
		}
	}
</script>

{#if !isOnline}
	<div class="offline-banner">
		<span class="offline-icon">📶</span>
		Modalità offline
	</div>
{/if}

{#if isLoading.value}
	<LoadingPage />
{:else if user.value !== null}
	<div
		class="animate-slideUp mx-auto flex h-[250px] w-[300px] flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 text-gray-900 shadow-2xl dark:bg-gray-800 dark:text-gray-100"
	>
		<h1 class="text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">
			Bentornato!
		</h1>

		<div class="flex flex-col items-center justify-center gap-4">
			<div class="flex flex-col items-center gap-5 text-center">
				{#if !isOnline}
					<div
						class="flex items-center justify-center gap-2 rounded-xl bg-yellow-100 text-center text-sm text-yellow-800"
					>
						<span class="rounded bg-yellow-500 text-xs font-semibold text-white">Offline</span>
						Dati memorizzati localmente
					</div>
				{/if}
				<a href="/home" target="_self" rel="noopener noreferrer" aria-label="/home" class="w-full">
					<div
						class="flex h-[60px] w-[280px] items-center gap-1 rounded-2xl bg-gray-100 dark:bg-gray-700"
					>
						<div
							class="flex h-10 w-10 flex-1/4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white"
						>
							{getInitials(user.value?.displayName ?? '', user.value?.email ?? '')}
						</div>
						<div class="w-full flex-3/4 text-center">
							<h2 class="text-xl font-bold break-words text-gray-800 dark:text-gray-100">
								{user.value?.displayName}
							</h2>
							<p class="text-sm break-all text-gray-500 dark:text-gray-400">{user.value?.email}</p>
						</div>
					</div>
				</a>
			</div>
		</div>

		<div class="flex flex-col gap-4">
			<button
				type="button"
				class="rounded-xl border-2 border-gray-200 bg-gray-100 px-6 py-4 text-base font-semibold text-slate-600 transition hover:border-gray-300 hover:bg-gray-200"
				onclick={async () => {
					await handleSignOut();
				}}
			>
				Disconnetti
			</button>
		</div>
	</div>
{/if}
