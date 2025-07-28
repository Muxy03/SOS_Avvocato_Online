<script lang="ts">
	import firebase from '$lib/firebase';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import type { AppContext } from '$lib';
	import { getContext } from 'svelte';

	// Component state
	let email = $state('');
	let password = $state('');
	let loading = $state(false);

	// PWA specific state
	let rememberMe = $state(true);

	// Form validation
	const emailValid = $derived(email.includes('@') && email.includes('.'));
	const passwordValid = $derived(password.length >= 6);
	const formValid = $derived(emailValid && passwordValid);

	let { error }: AppContext = getContext('App');

	$effect(() => {
		$inspect(error);
	});
</script>

<div
	class="relative container flex min-h-screen min-w-screen flex-col items-center justify-center p-4"
>
	<!-- Form di autenticazione -->
	<div class="auth-card">
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
						// Successful login - form action will handle redirect
						await update();
					} else if (result.type === 'failure') {
						// if(result.data){
						// 	'auth/invalid-email': 'Indirizzo email non valido',
						// 	'auth/user-disabled': 'Account disabilitato',
						// 	'auth/user-not-found': 'Nessun utente trovato con questa email',
						// 	'auth/wrong-password': 'Password errata'
						// };
						error.value = result.data?.error as string;
						await update();
					} else if (result.type === 'redirect') {
						await signInWithEmailAndPassword(firebase.auth, email, password);
						// Let SvelteKit handle the redirect to /home
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
					placeholder="Inserisci la tua email"
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
					<input type="checkbox" bind:checked={rememberMe} class="checkbox" />
					<span class="checkmark"></span>
					Ricordami
				</label>
			</div>

			{#if error.value.length > 0}
				<div class="error-message">
					{error.value}
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

		<div class="auth-switch">
			<p>
				Non hai un account?
				<button type="button" class="link-btn" onclick={() => goto('/register')}>
					Registrati
				</button>
			</p>
		</div>
	</div>
</div>
