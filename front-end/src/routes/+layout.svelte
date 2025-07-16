<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-w-screen min-h-screen flex items-center justify-center">
	{@render children()}
</div>
