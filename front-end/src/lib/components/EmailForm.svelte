<script lang="ts">
	import { enhance } from '$app/forms';
	import type { FILE, Email, AppContext } from '$lib';
	import { getContext } from 'svelte';

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

	const { error }: AppContext = getContext('App');

	function Test() {
		const Test = {
			sender: { email: 'a.mussari@studenti.unipi.it', name: 'Andrea Mussari' },
			to: [{ email: 'a.mussari@studenti.unipi.it', name: 'Andrea Mussari' }],
			textContent: 'TESTING',
			subject: 'TEST',
			htmlContent: '',
			attachment: []
		};
		(Test as Email).htmlContent = `<p>${Test.textContent}</p>`;

		return Test as Email;
	}

	// Utility functions
	function formatFileSize(bytes: number) {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
	}

	function getFileIcon(fileName: string) {
		return '📎';
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

<div class="flex min-h-screen items-center justify-center">
	<div class="flex h-[600px] w-[300px] flex-col items-center justify-center">
		<div
			class="flex flex-col items-center justify-around overflow-hidden rounded-lg bg-white shadow-lg"
		>
			<!-- Header -->
			<div
				class="flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600"
			>
				<h1 class="text-2xl font-bold text-white">Send Email</h1>
				<p class=" text-center text-blue-100">Compose and send your message with attachments</p>
			</div>

			<!-- Form -->
			<form
				class="flex flex-col"
				method="POST"
				action="?/sendEmail"
				use:enhance={({ formData }) => {
					isSubmitting = true;

					// Add form data
					formData.set('to', to);
					formData.set('subject', subject);
					formData.set('message', message);

					return async ({ result, update }) => {
						isSubmitting = false;

						if (result.type === 'success') {
							await update();
						} else if (result.type === 'failure') {
							// TODO: Handle FIREBASE ERROR
							error.value = result.data?.code as string;
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
						class="w-full rounded-md border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
					<!-- {#if errors.to}
						<p class="mt-1 text-sm text-red-600">{errors.to}</p>
					{/if} -->
				</div>

				<!-- CC/BCC toggle -->
				{#if !showCcBcc}
					<button
						type="button"
						onclick={() => (showCcBcc = true)}
						class="text-sm font-medium text-blue-600 hover:text-blue-800"
					>
						+ Add CC/BCC
					</button>
				{/if}

				<!-- CC/BCC fields -->
				{#if showCcBcc}
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div>
							<label for="cc-email" class="mb-2 block text-sm font-medium text-gray-700">CC</label>
							<input
								id="cc-email"
								type="email"
								bind:value={cc}
								placeholder="cc@example.com"
								class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
							/>
						</div>
						<div>
							<label for="bcc-email" class="mb-2 block text-sm font-medium text-gray-700">BCC</label
							>
							<input
								id="bcc-email"
								type="email"
								bind:value={bcc}
								placeholder="bcc@example.com"
								class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
							/>
						</div>
					</div>
				{/if}

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
				<div>
					<label for="files" class="mb-2 block text-sm font-medium text-gray-700">Attachments</label
					>

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
						<div class="mt-4 space-y-2">
							{#each attachments as attachment}
								<div class="file-item flex items-center justify-between rounded-lg bg-gray-50 p-3">
									<div class="flex items-center space-x-3">
										<span class="text-2xl">{getFileIcon(attachment.name)}</span>
										<div>
											<p class="font-medium text-gray-900">{attachment.name}</p>
											<p class="text-sm text-gray-500">{formatFileSize(attachment.size)}</p>
										</div>
									</div>
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

				<!-- Submit section -->
				<div
					class="flex flex-col items-center justify-between space-y-3 border-t border-gray-200 pt-6 sm:flex-row sm:space-y-0"
				>
					<div class="text-sm text-gray-500">
						{attachments.length} file(s) attached
					</div>

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
							class="transform rounded-md bg-gradient-to-r from-blue-600 to-purple-600 font-medium text-white transition-all hover:scale-105 hover:from-blue-700 hover:to-purple-700 disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
						>
							{isSubmitting ? 'Sending...' : 'Send Email'}
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>

<style>
	.file-item {
		transition: all 0.2s ease;
	}

	.file-item:hover {
		background-color: #f9fafb;
	}
</style>
