<script lang="ts">
	import { enhance } from '$app/forms';
	import type { FILE } from '$lib';
	import { toBase64Browser } from '$lib/brevo';
	import Modal from './Modal.svelte';

	// State variables
	let to = $state('a.mussari@studenti.unipi.it');
	let cc = $state('');
	let bcc = $state('');
	let subject = $state('TEST');
	let message = $state('TESTING');
	let attachments: FILE[] = $state([]);
	let isSubmitting = $state(false);
	let showCcBcc = $state(false);
	let errors = $derived({ to: to, subject: subject, message: message });
	let fileInput: HTMLInputElement | undefined = $state();

	let error = $state({ value: '' });
	let showModal = $derived(error.value.length > 0);

	// Utility functions
	function formatFileSize(bytes: number) {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
	}

	function handleFileSelect(event: Event) {
		const files: File[] = Array.from((event.target as HTMLInputElement)?.files || []);
		addFiles(files);
	}

	function addFiles(files: File[]) {
		const newAttachments = files.map((file) => ({
			id: Date.now() + Math.random(),
			file: file,
			name: file.name,
			size: file.size,
			type: file.type
		}));
		attachments = [...attachments, ...newAttachments];
	}

	function removeAttachment(id: number) {
		attachments = attachments.filter((att) => att.id !== id);
	}

	function validateForm() {
		const newErrors = { to: '', subject: '', message: '' };
		if (!to.trim()) {
			newErrors.to = 'Recipient email is required';
		} else if (!/\S+@\S+\.\S+/.test(to)) {
			newErrors.to = 'Please enter a valid email address';
		}
		if (!subject.trim()) {
			newErrors.subject = 'Subject is required';
		}
		if (!message.trim()) {
			newErrors.message = 'Message is required';
		}
		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	}

	function handleCancel() {
		if (confirm('Are you sure you want to cancel? All data will be lost.')) {
			to = '';
			cc = '';
			bcc = '';
			subject = '';
			message = '';
			attachments = [];
			showCcBcc = false;
			errors = { to, subject, message };
		}
	}
</script>

<div class="flex items-center justify-center">
	<div class="flex w-[300px] flex-col items-center justify-center">
		<!-- Form -->
		<form
			class="flex max-h-[500px] flex-col items-center gap-1 rounded-lg bg-white p-5 shadow-lg"
			method="POST"
			action="?/sendEmail"
			use:enhance={async ({ formData }) => {
				isSubmitting = true;

				// Add form data
				formData.set('to', to);
				formData.set('subject', subject);
				formData.set('message', message);

				for (const f of attachments) {
					const str = (await toBase64Browser(f.file)).split(',')[1];
					formData.append('attachments', JSON.stringify({ name: f.name, content: str }));
				}

				return async ({ result, update }) => {
					isSubmitting = false;

					if (result.type === 'success') {
						await update();
					} else if (result.type === 'failure') {
						// TODO: Handle FIREBASE ERROR
						console.error(result.data);
						error.value = result.data?.message as string;
						await update();
					}
				};
			}}
		>
			<!-- To field -->
			<div class="flex items-center justify-between gap-4">
				<label for="sender-mail" class="block text-sm font-medium text-gray-700"> To </label>
				<input
					id="sender-mail"
					type="email"
					bind:value={to}
					placeholder="recipient@example.com"
					class=" w-full rounded-md border border-gray-300 text-center focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
				/>
				<!-- {#if errors.to}
						<p class="mt-1 text-sm text-red-600">{errors.to}</p>
					{/if} -->
			</div>

			<!-- Subject field -->
			<div>
				<label for="subject" class="mb-2 block text-sm font-medium text-gray-700">
					Subject <span class="text-red-500">*</span>
				</label>
				<input
					id="subject"
					type="text"
					bind:value={subject}
					placeholder="Enter email subject"
					class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
				/>
				<!-- {#if errors.subject}
						<p class="mt-1 text-sm text-red-600">{errors.subject}</p>
					{/if} -->
			</div>

			<!-- Message field -->
			<div>
				<label for="message" class="mb-2 block text-sm font-medium text-gray-700">
					Message <span class="text-red-500">*</span>
				</label>
				<textarea
					id="message"
					rows="6"
					bind:value={message}
					placeholder="Enter your message here..."
					class="w-full resize-y rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
				></textarea>
				<!-- {#if errors.message}
						<p class="mt-1 text-sm text-red-600">{errors.message}</p>
					{/if} -->
			</div>

			<!-- Attachments section -->
			<div class="flex flex-col items-center gap-2 overflow-y-scroll">
				<label for="files" class="mb-2 block text-sm font-medium text-gray-700">Attachments</label>

				<input
					id="files"
					bind:this={fileInput}
					type="file"
					multiple
					onchange={handleFileSelect}
					class="hidden"
				/>

				<!-- Attachment list -->
				{#if attachments.length > 0}
					<div class="space-y-2">
						{#each attachments as attachment}
							<div class="file-item flex items-center justify-between rounded-lg bg-gray-50">
								<p class="font-medium text-gray-900">{attachment.name}</p>
								<button
									type="button"
									onclick={() => removeAttachment(attachment.id)}
									class="font-medium text-red-500 hover:text-red-700"
								>
									✕
								</button>
							</div>
						{/each}
					</div>
				{/if}
			</div>

			<div class="text-sm text-gray-500">
				{attachments.length} file(s) attached
			</div>

			<!-- Submit section -->
			<div class="flex flex-col items-center justify-between">
				<div class="flex gap-3">
					<button
						type="button"
						onclick={handleCancel}
						class="rounded-md border border-gray-300 font-medium text-gray-700 transition-colors hover:bg-gray-50"
					>
						Cancel
					</button>

					<button
						type="submit"
						disabled={isSubmitting}
						class="h-[30px] w-[100px] transform rounded-md bg-blue-600 font-medium text-white transition-all hover:scale-105 hover:from-blue-700 hover:to-purple-700 disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
					>
						{isSubmitting ? 'Sending...' : 'Send Email'}
					</button>
				</div>
			</div>
		</form>
		<!-- </div> -->
	</div>
</div>

{#if error.value.length > 0}
	<Modal bind:showModal>
		{#snippet header()}
			<h2>ERROR</h2>
		{/snippet}

		{error.value}

		<!-- <ol class="definition-list">
			</ol> -->
	</Modal>
{/if}

<style>
	.file-item {
		transition: all 0.2s ease;
	}

	.file-item:hover {
		background-color: #f9fafb;
	}
</style>
