<script lang="ts">
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';

	let user = $state(undefined);

	async function setUser() {
		const user_session = await fetch('/api/session', {
			method: 'GET',
			credentials: 'same-origin',
			headers: { 'Content-Type': 'application/json' }
		});

		if (user_session.ok) {
			user = await user_session.json();
		}
	}

	onMount(() => {
		setUser();
	});
</script>

<div class="container">
	<!-- First Clickable DIV -->
	<div
		class="clickable-div div1"
		onclick={() => (window.location.href = '/call')}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Enter' && (window.location.href = '/call')}
	>
		<div class="shine-overlay"></div>
		<div class="content">
			<div class="text-center">Consulenza Vocale (da implementare)</div>
			<div class="subtitle">SOLO X EMERGENZE!!</div>
		</div>
	</div>

	<!-- Second Clickable DIV -->
	<!-- onkeydown={(e) => e.key === 'Enter' && (window.location.href = '/write')} -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="clickable-div div2"
		onclick={() => (window.location.href = '/write')}
		role="button"
		tabindex="0"
	>
		<div class="shine-overlay"></div>
		<div class="content">
			<div>Consulenza Scritta</div>
			<div class="subtitle">Sottotitolo</div>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 30px;
	}

	.clickable-div {
		width: 320px;
		height: 250px;
		border-radius: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		color: white;
		font-size: 24px;
		font-weight: bold;
		text-align: center;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
		position: relative;
		overflow: hidden;
		transform: translateY(0) scale(1);
	}

	.clickable-div:hover {
		transform: translateY(-12px) scale(1.05);
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
	}

	.clickable-div:active {
		transform: translateY(-6px) scale(1.02);
		transition-duration: 0.1s;
	}

	.clickable-div:focus {
		outline: 3px solid rgba(255, 255, 255, 0.5);
		outline-offset: 4px;
	}

	.div1 {
		background: linear-gradient(135deg, #ff6b6b, #ee5a24);
	}

	.div2 {
		background: linear-gradient(135deg, #4ecdc4, #44a08d);
	}

	.shine-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			45deg,
			transparent 30%,
			rgba(255, 255, 255, 0.2) 50%,
			transparent 70%
		);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.clickable-div:hover .shine-overlay {
		opacity: 1;
	}

	.content {
		position: relative;
		z-index: 10;
	}

	.subtitle {
		font-size: 16px;
		margin-top: 10px;
		opacity: 0.9;
		font-weight: normal;
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.container {
			flex-direction: column;
			padding: 15px;
			gap: 20px;
		}

		.clickable-div {
			width: 90%;
			max-width: 320px;
			height: 200px;
			font-size: 20px;
		}

		.subtitle {
			font-size: 14px;
		}
	}

	@media (max-width: 480px) {
		.clickable-div {
			height: 180px;
			font-size: 18px;
		}
	}
</style>
