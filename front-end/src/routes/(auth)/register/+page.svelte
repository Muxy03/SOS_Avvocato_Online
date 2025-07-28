<script lang="ts">
	import { goto } from '$app/navigation';
	import type { AppContext } from '$lib';
	import { getContext } from 'svelte';

	// Component state
	let isLogin = $state(false);
	let email = $state('');
	let password = $state('');
	let confirmPassword = $state('');
	let displayName = $state('');
	let loading = $state(false);

	const { isOnline, user, error }: AppContext = getContext('App');

	// Form validation
	const emailValid = $derived(email.includes('@') && email.includes('.'));
	const passwordValid = $derived(password.length >= 6);
	const confirmPasswordValid = $derived(!isLogin ? password === confirmPassword : true);
	const displayNameValid = $derived(isLogin || displayName.trim().length >= 2);
	const formValid = $derived(
		emailValid && passwordValid && confirmPasswordValid && displayNameValid
	);
</script>

<div
	class="relative container flex min-h-screen min-w-screen flex-col items-center justify-center p-4"
>
	<!-- Form di autenticazione -->
	<div class="auth-card">
		<div class="auth-header">
			<h1>Registrati</h1>
		</div>

		<form class="auth-form" method="POST" action="?/register">
			<div class="form-group">
				<label for="displayName">Nome completo</label>
				<input
					id="displayName"
					type="text"
					bind:value={displayName}
					placeholder="Inserisci il tuo nome"
					class="form-input"
					class:invalid={displayName && !displayNameValid}
					autocomplete="name"
				/>
				{#if displayName && !displayNameValid}
					<span class="error-text">Il nome deve essere di almeno 2 caratteri</span>
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
					autocomplete={isLogin ? 'current-password' : 'new-password'}
					required
				/>
				{#if password && !passwordValid}
					<span class="error-text">La password deve essere di almeno 6 caratteri</span>
				{/if}
			</div>

			{#if error.value.length > 0}
				<div class="error-message">
					{error.value}
				</div>
			{/if}

			<button
				type="submit"
				class="btn btn-primary"
				disabled={!formValid || loading || (!isOnline && !user.value)}
			>
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
