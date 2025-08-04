<script lang="ts">
	import { Lang, Online } from '$lib/shared.svelte';
	import logo from '$lib/assets/LOGO.jpeg';
	import { onMount } from 'svelte';
	import Modal from './Modal.svelte';

	// Svelte 5 runes and syntax
	let { user = $bindable(undefined) } = $props();

	const title = 'S.O.S Avvocato Online';
	let isHover = $state(false);
	let showModal = $state(false);
	let isLoggedIn = $state(false);
	let showHelp = $state(false);

	// Popup states using runes
	let showHelpPopup = $state(false);
	let showProfilePopup = $state(false);
	let showLangPopup = $state(false);

	//let isOnline = $state(true);

	function updateOnlineStatus() {
		Online.value = navigator.onLine;
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
				window.location.href = '/about/' + user.DocId;
			}
		}
	}

	function toggleLang() {
		Lang.value = Lang.value === 'ENG' ? 'ITA' : 'ENG';
	}

	onMount(() => {
		updateOnlineStatus();
		window.addEventListener('online', updateOnlineStatus);
		window.addEventListener('offline', updateOnlineStatus);
	});
</script>

<!-- Navbar Container -->
<div class="z-50 flex h-auto items-center justify-around pt-3" role="presentation">
	<nav
		class="flex h-full items-center justify-center gap-3 rounded-xl bg-white px-3 shadow-lg backdrop-blur-sm"
	>
		<!-- Logo and Title -->
		<a href="/home" class="flex items-center justify-center">
			<img src={logo} alt="Logo" class="h-20 w-20 rounded-lg" />
		</a>

		<div class="hidden md:lg:block">
			<h1 class="text-md text-wrap text-center font-semibold text-black drop-shadow-md">
				{title}
			</h1>
		</div>

		<!-- Navigation Buttons -->
		<div class="flex items-center gap-3">
			<div class="relative flex items-center gap-1">
				<button
					onclick={() => (showModal = true)}
					class="black/30 hover:black/50 flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 bg-white/20 px-4 py-2 text-lg font-bold text-black backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/30 hover:shadow-lg active:translate-y-0"
					title="Help"
				>
					?
				</button>
				{@render Help()}
			</div>
			<div class="relative">
				<button
					onclick={handleProfile}
					class="black/30 hover:black/50 flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 bg-white/20 px-4 py-2 text-lg text-black backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/30 hover:shadow-lg active:translate-y-0"
					title="Profile"
				>
					👤
				</button>

				<!-- {#if showProfilePopup}
					<div
						class="absolute right-0 top-14 z-50 whitespace-nowrap rounded-lg border border-orange-200 bg-orange-50 text-sm text-orange-700 shadow-xl before:absolute before:-top-2 before:right-4 before:h-0 before:w-0 before:border-b-8 before:border-l-8 before:border-r-8 before:border-transparent before:border-b-orange-50 before:content-['']"
					>
						{#if isLoggedIn}
							Redirecting to your profile...
						{:else}
							Please log in to access your profile.
						{/if}
					</div>
				{/if} -->
			</div>

			<div class="relative">
				<button
					onclick={toggleLang}
					class="black/30 hover:black/50 flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 bg-white/20 px-4 py-2 text-sm font-semibold text-black backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/30 hover:shadow-lg active:translate-y-0"
					title="Language"
				>
					{Lang.value}
				</button>

				<!-- {#if showLangPopup}
					<div
						class="absolute right-0 top-14 z-50 whitespace-nowrap rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 shadow-xl before:absolute before:-top-2 before:right-4 before:h-0 before:w-0 before:border-b-8 before:border-l-8 before:border-r-8 before:border-transparent before:border-b-red-50 before:content-['']"
					>
						Invalid language setting. Please contact support.
					</div>
				{/if} -->
			</div>

			<div class="relative">
				<button
					aria-label="Online"
					class={`flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 ${
						Online.value ? 'bg-green-100' : 'bg-red-100'
					} px-4 py-2 text-lg backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0`}
				>
					<div class={`h-3 w-3 rounded-full ${Online.value ? 'bg-green-500' : 'bg-red-500'}`}></div>
				</button>
			</div>
		</div>
	</nav>
</div>

{#snippet Help()}
	<Modal bind:showModal>
		{#snippet header()}
			<h2>
				modal
				<small><em>adjective</em> mod·al \ˈmō-dəl\</small>
			</h2>
		{/snippet}

		<ol class="definition-list">
			<li>of or relating to modality in logic</li>
			<li>
				containing provisions as to the mode of procedure or the manner of taking effect —used of a
				contract or legacy
			</li>
			<li>of or relating to a musical mode</li>
			<li>of or relating to structure as opposed to substance</li>
			<li>
				of, relating to, or constituting a grammatical form or category characteristically
				indicating predication
			</li>
			<li>of or relating to a statistical mode</li>
		</ol>

		<a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
	</Modal>
{/snippet}
