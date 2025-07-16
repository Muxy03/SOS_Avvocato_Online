<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-w-screen min-h-screen place-content-center">
	{@render children()}
</div>
