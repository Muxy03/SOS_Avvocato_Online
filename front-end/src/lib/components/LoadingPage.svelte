<script lang="ts">
	import logo from '$lib/assets/logo.svg';
</script>

<div class="min-w-screen imtes-center flex min-h-screen justify-center">
	<img src={logo} alt="Logo" class="zoom-in-out-element" width="100" height="100"/>
</div>

<style>
	.zoom-in-out-element {
		animation: zoom-in-zoom-out 1s ease infinite;
	}
	@keyframes zoom-in-zoom-out {
		0% {
			scale: 100%;
		}
		50% {
			scale: 150%;
		}
		100% {
			scale: 100%;
		}
	}
</style>
