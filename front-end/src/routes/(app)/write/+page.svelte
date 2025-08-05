<script lang="ts">
	import { page } from '$app/state';
	import EmailForm from '$lib/components/EmailForm.svelte';
	import Modal from '$lib/components/Modal.svelte';

	let showModal = $state(false);
	let error = $state(page.error !== null || (page.form && page.form.error));

	if (error) {
		showModal = true;
	}
</script>

<EmailForm />

{#if error}
	<Modal bind:showModal>
		{#snippet header()}
			<h2>ERROR</h2>
		{/snippet}

		{page.error?.message || page.form.error.message}

		<!-- <ol class="definition-list">
				</ol> -->
	</Modal>
{/if}
