<script lang="ts">
	import type { Consultation } from '$lib';

	let { data } = $props();

	let currentIndex = $state(0);

	function next() {
		currentIndex = (currentIndex + 1) % data.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + data.length) % data.length;
	}
</script>

<div
	class="relative flex w-full max-w-3xl flex-col items-center justify-center gap-3 overflow-hidden"
>
	{#each data as Consultation[] as cons, i}
		<div
			class="flex w-full flex-shrink-0 items-center justify-center"
			class:hidden={currentIndex !== i}
		>
			<button onclick={next} ondblclick={prev}>
				<div
					class="flex h-64 w-[250px] flex-col items-center justify-center gap-4 rounded-xl border-2 bg-white text-xl text-clip"
				>
					{cons.email.sender.name}
					{cons.email.sender.email}
					{cons.status}
				</div>
			</button>
		</div>
	{/each}

	<p>{currentIndex + 1}/{data.length}</p>
</div>
