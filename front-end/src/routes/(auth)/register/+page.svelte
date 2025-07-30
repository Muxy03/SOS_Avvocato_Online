<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { AppContext } from '$lib';
	import firebase from '$lib/firebase';
	import { redirect } from '@sveltejs/kit';
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { getContext } from 'svelte';

	// Component state
	let email = $state('');
	let password = $state('');
	let fullName = $state('');
	let loading = $state(false);

	const { error }: AppContext = getContext('App');

	// Form validation
	const emailValid = $derived(email.includes('@') && email.includes('.'));
	const passwordValid = $derived(password.length >= 6);
	const fullNameValid = $derived(fullName.length > 0);
	const formValid = $derived(emailValid && passwordValid && fullNameValid);
</script>

<div
	class="relative container flex min-h-screen min-w-screen flex-col items-center justify-center p-4"
>
	<div class="auth-card">
		<div class="auth-header">
			<h1>Registrati</h1>
		</div>

		<form
			class="auth-form"
			method="POST"
			action="?/register"
			use:enhance={({ formData }) => {
				loading = true;

				// Add form data
				formData.set('email', email);
				formData.set('password', password);
				formData.set('fullName', fullName);

				return async ({ result, update }) => {
					loading = false;

					if (result.type === 'success') {
						await update();
					} else if (result.type === 'failure') {
						// TODO: Handle FIREBASE ERROR
						error.value = result.data?.code as string;
						await update();
					} else if (result.type === 'redirect') {
						await createUserWithEmailAndPassword(firebase.auth, email, password);

						redirect(303,result.location);
					}
				};
			}}
		>
			<div class="form-group">
				<label for="fullName">Nome Completo</label>
				<input
					id="fullName"
					type="text"
					bind:value={fullName}
					placeholder="Inserisci Nome e Cognome"
					class="form-input"
					class:invalid={fullName && !fullNameValid}
					required
				/>
				{#if fullName && !fullNameValid}
					<span class="error-text">Inserisci un Nome Completo valido</span>
				{/if}
			</div>

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
					autocomplete={'new-password'}
					required
				/>
				{#if password && !passwordValid}
					<span class="error-text">La password deve essere di almeno 6 caratteri</span>
				{/if}
			</div>

			{#if error.value.length > 0}
				<div class="error-message max-w-full text-clip">
					{error.value}
				</div>
			{/if}

			<button type="submit" class="btn btn-primary" disabled={!formValid}>
				{#if loading}
					<span class="loading-spinner"></span>
					Creazione account...
				{:else}
					Crea Account
				{/if}
			</button>
		</form>

		<div class="auth-switch">
			<p>
				Hai già un account?
				<button type="button" class="link-btn" onclick={() => goto('/login')}> Accedi </button>
			</p>
		</div>
	</div>
</div>
