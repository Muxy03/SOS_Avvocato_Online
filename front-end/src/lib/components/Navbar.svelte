<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// Svelte 5 runes and syntax
	let { user = $bindable(undefined) } = $props();

	let title = $state('SOS Avvocato Online');
	let logoSrc = $state('/logo.svg');
	let currentLang = $state('ENG');
	let isLoggedIn = $state(false);
	let showHelp = $state(false);
	let User = $derived(user);

	// Popup states using runes
	let showHelpPopup = $state(false);
	let showProfilePopup = $state(false);
	let showLangPopup = $state(false);

	let isOnline = $state(true);

	function updateOnlineStatus() {
		isOnline = navigator.onLine;
	}

	// Functions
	function toggleHelp() {
		showHelpPopup = !showHelpPopup;
		showProfilePopup = false;
		showLangPopup = false;
		setTimeout(() => (showHelpPopup = false), 3 * 1000);
	}

	async function handleProfile() {
		const user_session = await fetch('/api/session', {
			method: 'GET',
			credentials: 'same-origin',
			headers: { 'Content-Type': 'application/json' }
		});

		if (user_session.status === 200) {
			const user = await user_session.json();

			console.log('Navbar', user);
			if (!user) {
				showProfilePopup = !showProfilePopup;
				showHelpPopup = false;
				showLangPopup = false;
			} else {
				goto('/about/' + user.DocId);
			}
		}
	}

	function toggleLang() {
		if (currentLang === 'ENG' || currentLang === 'ITA') {
			const newLang = currentLang === 'ENG' ? 'ITA' : 'ENG';
			currentLang = newLang;
		} else {
			showLangPopup = true;
			showHelpPopup = false;
			showProfilePopup = false;
		}
	}

	onMount(() => {
		updateOnlineStatus();
		window.addEventListener('online', updateOnlineStatus);
		window.addEventListener('offline', updateOnlineStatus);
	});
</script>

<!-- Navbar Container -->
<div class="fixed top-0 right-0 left-0 z-50 h-15 " role="presentation">
	<nav class="flex h-full items-center justify-between bg-white px-4 shadow-lg backdrop-blur-sm">
		<!-- Logo and Title -->
		<div class="flex items-center gap-4">
			<img src={logoSrc} alt="Logo" class="h-10 w-10 rounded-lg shadow-md" />
			<h1 class="text-center text-sm font-semibold text-black drop-shadow-md">{title}</h1>
		</div>

		<!-- Navigation Buttons -->
		<div class="flex items-center gap-3">
			<!-- Help Button -->
			<div class="relative flex items-center gap-1">
				<button
					onclick={toggleHelp}
					class="black/30 hover:black/50 flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 bg-white/20 px-4 py-2 text-lg font-bold text-black backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/30 hover:shadow-lg active:translate-y-0"
					title="Help"
				>
					?
				</button>

				{#if showHelpPopup}
					<div
						class="absolute top-14 right-0 z-50 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm whitespace-nowrap text-blue-800 shadow-xl before:absolute before:-top-2 before:right-4 before:h-0 before:w-0 before:border-r-8 before:border-b-8 before:border-l-8 before:border-transparent before:border-b-blue-50 before:content-['']"
					>
						{#if showHelp}
							Welcome! Click here for help and tutorials.
						{:else}
							Help not implemented
						{/if}
					</div>
				{/if}
			</div>

			<!-- Profile Button -->
			<div class="relative">
				<button
					onclick={handleProfile}
					class="black/30 hover:black/50 flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 bg-white/20 px-4 py-2 text-lg text-black backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/30 hover:shadow-lg active:translate-y-0"
					title="Profile"
				>
					👤
				</button>

				{#if showProfilePopup}
					<div
						class="absolute top-14 right-0 z-50 rounded-lg border border-orange-200 bg-orange-50 text-sm whitespace-nowrap text-orange-700 shadow-xl before:absolute before:-top-2 before:right-4 before:h-0 before:w-0 before:border-r-8 before:border-b-8 before:border-l-8 before:border-transparent before:border-b-orange-50 before:content-['']"
					>
						{#if isLoggedIn}
							Redirecting to your profile...
						{:else}
							Please log in to access your profile.
						{/if}
					</div>
				{/if}
			</div>

			<!-- Language Button -->
			<div class="relative">
				<button
					onclick={toggleLang}
					class="black/30 hover:black/50 flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 bg-white/20 px-4 py-2 text-sm font-semibold text-black backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/30 hover:shadow-lg active:translate-y-0"
					title="Language"
				>
					{currentLang}
				</button>

				{#if showLangPopup}
					<div
						class="absolute top-14 right-0 z-50 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm whitespace-nowrap text-red-700 shadow-xl before:absolute before:-top-2 before:right-4 before:h-0 before:w-0 before:border-r-8 before:border-b-8 before:border-l-8 before:border-transparent before:border-b-red-50 before:content-['']"
					>
						Invalid language setting. Please contact support.
					</div>
				{/if}
			</div>

			<div class="relative">
				<button
					aria-label="Online"
					class={`flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 ${
						isOnline ? 'bg-green-100' : 'bg-red-100'
					} px-4 py-2 text-lg backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0`}
				>
					<div class={`h-3 w-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
				</button>
			</div>
		</div>
	</nav>
</div>

<!-- Spacer to prevent content from hiding behind fixed navbar -->
<div class="h-20"></div>
