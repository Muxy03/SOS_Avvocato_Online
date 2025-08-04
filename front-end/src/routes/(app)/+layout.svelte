<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	let { data, children } = $props() as { data?: any; children: any };
	const user = $state({ ...data.user });
</script>

<div class="flex h-full w-full flex-col items-center gap-6">
	<Navbar {user} />

	{@render children()}
</div>
