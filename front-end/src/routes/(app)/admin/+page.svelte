<script lang="ts">
	let { data } = $props();
	const { consultations, error } = data;

	let current = $state(0);

	function next() {
		if (current < consultations.length - 1) {
			current += 1;
		}
	}

	function previous() {
		if (current > 0) {
			current -= 1;
		}
	}
</script>

<div class="flex w-full flex-col items-center justify-between gap-3">
	{#if consultations.length === 0}
		<p class="text-center text-xl font-bold text-gray-900">Nessuna consultazione trovata</p>
	{:else if error}
		<p class="text-center text-xl font-bold text-red-600">Errore: {error}</p>
	{:else}
		<a href="/consultation/{consultations[current].id}">
			<div
				class="flex h-[100px] w-[200px] flex-col items-center justify-center rounded-lg border border-white bg-white"
			>
				<h5 class="text-center text-xl font-bold tracking-tight text-wrap text-gray-900">
					{consultations[current].email.sender.name}
				</h5>
				<p class="text-center leading-tight font-normal text-gray-700">
					{consultations[current].status}
				</p>
			</div>
		</a>
		<div class="flex w-[60px] items-center justify-around gap-1 rounded-lg border bg-white">
			{current + 1} / {consultations.length}
		</div>

		<div class="flex w-full items-center justify-around">
			<button type="button" class="rounded-lg border-2 border-white bg-white" onclick={previous}
				>Indietro</button
			>
			<button type="button" class="rounded-lg border-2 border-white bg-white" onclick={next}
				>Avanti</button
			>
		</div>
	{/if}
</div>
