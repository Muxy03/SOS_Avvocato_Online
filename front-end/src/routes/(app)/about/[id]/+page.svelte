<script lang="ts">
	import type { UserData } from '$lib';
	import Carousel from '$lib/components/Carousel.svelte';

	let { data } = $props();

	const user = data.user as UserData;
</script>

<div
	class="flex w-full max-w-xs flex-col items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5"
>
	<div class="h-max w-full rounded text-center">
		<h6 class="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">
			{user.FullName}
		</h6>
		<p class="text-center font-sans text-slate-600 antialiased">
			{user.email}
		</p>
	</div>
	<div class="w-full rounded px-3 pt-1.5 pb-3">
		<Carousel data={user.Emails}></Carousel>
	</div>
</div>
