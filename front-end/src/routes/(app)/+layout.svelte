<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	let { data, children } = $props() as { data?: any; children: any };
	const user = $state({ ...data.user });
</script>

<Navbar {user} />

{@render children()}
