<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-w-screen flex min-h-screen items-center justify-center">
	{@render children()}
</div>
