<script lang="ts">
	import type { Consultation } from '$lib';

	let { data } = $props<{ data: { consultation: Consultation } }>();

	console.log('data.Consultation:', data.consultation);
</script>

{#if data.consultation === undefined}
	<p>Loading...</p>
{:else}
	<div class="flex-flex-col items-center justify-center gap-10">
		<div class="flex w-full flex-col items-center justify-center border-2 bg-white">
			<h1 class="text-2xl font-bold">Consultation Details</h1>
			<p><strong>Subject:</strong> {data.consultation.email.subject}</p>
			<p><strong>Status:</strong> {data.consultation.status}</p>
			{@html data.consultation.email.htmlContent}
		</div>

		<div class="flex w-full items-center justify-center">
			<button class="btn btn-primary">Edit Consultation</button>
		</div>
	</div>
{/if}
