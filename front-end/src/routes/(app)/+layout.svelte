<script lang="ts">
	let { children } = $props();
</script>

<div class="min-h-screen min-w-screen flex-col items-center justify-center">
	{@render children()}
</div>
