<script lang="ts">
	import firebase from '$lib/firebase';
	import { signInWithEmailAndPassword, type User } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import type { AppContext, UserData } from '$lib';
	import { getContext, onMount } from 'svelte';

	// Component state
	let email = $state('');
	let password = $state('');
	let loading = $state(false);

	// Form validation
	const emailValid = $derived(email.includes('@') && email.includes('.'));
	const passwordValid = $derived(password.length >= 6);
	const formValid = $derived(emailValid && passwordValid);
	let error: { value: string } | undefined = $state({ value: '' });
	let user: { value: UserData | undefined } | undefined = $state({ value: undefined });

	// let RememberMe: { value: boolean } | undefined = $state({ value: undefined });
	// onMount(() => {
	// 	const App: AppContext = getContext('App');
	// 	RememberMe = { ...App.RememberMe };
	// 	user = { ...App.user };
	// 	error = { ...App.error };
	// });
</script>

<div
	class="min-w-screen container relative flex min-h-screen flex-col items-center justify-center p-4"
>
	<!-- Form di autenticazione -->
	<div class="auth-card flex flex-col items-center justify-center gap-3">
		<div class="auth-header">
			<h1>Accedi</h1>
		</div>

		<form
			class="auth-form"
			method="POST"
			action="?/login"
			use:enhance={({ formData }) => {
				// Set loading state
				loading = true;

				// Add form data
				formData.set('email', email);
				formData.set('password', password);

				return async ({ result, update }) => {
					loading = false;

					if (result.type === 'success') {
						await update();
					} else if (result.type === 'failure') {
						// TODO: HANDLE FIREBASE ERROR
						error.value = result.data?.error as string;
						await update();
					} else if (result.type === 'redirect') {
						await signInWithEmailAndPassword(firebase.auth, email, password);
						goto(result.location);
					}
				};
			}}
		>
			<div class="form-group">
				<label for="email">Indirizzo Email</label>
				<input
					id="email"
					type="email"
					bind:value={email}
					placeholder={user === undefined || user.value === undefined
						? 'Inserisci la tua email'
						: user.value?.email}
					class="form-input"
					class:invalid={email && !emailValid}
					autocomplete="email"
					required
				/>
				{#if email && !emailValid}
					<span class="error-text">Inserisci un indirizzo email valido</span>
				{/if}
			</div>

			<div class="form-group">
				<label for="password">Password</label>
				<input
					id="password"
					type="password"
					bind:value={password}
					placeholder="Inserisci la tua password"
					class="form-input"
					class:invalid={password && !passwordValid}
					autocomplete="current-password"
					required
				/>
				{#if password && !passwordValid}
					<span class="error-text">La password deve essere di almeno 6 caratteri</span>
				{/if}
			</div>

			<div class="form-options">
				<label class="checkbox-label">
					<input type="checkbox" class="checkbox" />
					<!-- bind:checked={RememberMe?.value} -->
					<span class="checkmark"></span>
					Ricordami
				</label>
			</div>

			{#if error !== undefined && error.value !== undefined && error.value.length > 0}
				<div class="error-message">
					{error?.value}
				</div>
			{/if}

			<button type="submit" class="btn btn-primary" disabled={!formValid}>
				{#if loading}
					<span class="loading-spinner"></span>
					Accesso in corso...
				{:else}
					Accedi
				{/if}
			</button>
		</form>

		<div class="auth-switch flex w-full flex-col items-center justify-center gap-2">
			<div class="w-full border-t border-gray-600"></div>
			<p>
				Non hai un account?
				<a href="/register">
					<button type="button" class="link-btn"> Registrati </button>
				</a>
			</p>
		</div>
	</div>
</div>
