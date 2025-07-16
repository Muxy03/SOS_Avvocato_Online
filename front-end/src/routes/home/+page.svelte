<script lang="ts">
    import Brevo from '$lib/brevo'
	const authorizedExtensions = ['.png', '.pdf'];
	let files: FileList | undefined = $state();

	const deleteFile = (index: number) => {
		if (files) {
			let list = new DataTransfer();
			let tmp = { ...files };

			delete tmp[index];
			for (let i = 0; i < tmp.length; i++) {
				if (i !== index) {
					list.items.add(tmp.item(i)!);
				}
			}

			files = list.files;
		}
	};

	// const sendMail = () => {
	// 	Brevo.message.subject = 'First email';
	// 	Brevo.message.textContent = 'Hello world!';
	// 	Brevo.message.sender = { name: 'John Doe', email: 'a.mussari@studenti.unipi.it' };
	// 	Brevo.message.to = [{ email: 'andreamussari01@gmail.com', name: 'Jane Smith' }];

	// 	Brevo.emailAPI.sendTransacEmail(Brevo.message);
	// };
</script>

<div class="flex items-center justify-center">
	<!-- Author: FormBold Team -->
	<div class="mx-auto w-full max-w-[550px] bg-white">
		<form class="px-9 py-4">
			<div class="mb-5">
				<label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
					Send files to this email:
				</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="example@domain.com"
					accept={authorizedExtensions.join(',')}
					class="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				/>
			</div>

			<div class="mb-6 pt-4">
				<label for="" class="mb-5 block text-xl font-semibold text-[#07074D]"> Upload File </label>

				<div class="mb-8">
					<input bind:files multiple type="file" name="file" id="file" class="sr-only" />
					<label
						for="file"
						class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
					>
						<div>
							<span class="mb-2 block text-xl font-semibold text-[#07074D]"> Drop files here </span>
							<span class="mb-2 block text-base font-medium text-[#6B7280]"> Or </span>
							<span
								class="inline-flex rounded border border-[#e0e0e0] px-7 py-2 text-base font-medium text-[#07074D]"
							>
								Browse
							</span>
						</div>
					</label>
				</div>

				{#if files}
					{#each files as file, i}
						<div class="mb-5 rounded-md bg-[#F5F7FB] px-8 py-4">
							<div class="flex items-center justify-between">
								<span class="truncate pr-3 text-base font-medium text-[#07074D]">
									{file.name}
								</span>
								<button class="text-[#07074D]" aria-label="#" onclick={() => deleteFile(i)}>
									<svg
										width="10"
										height="10"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
											fill="currentColor"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
											fill="currentColor"
										/>
									</svg>
								</button>
							</div>
						</div>
					{/each}
				{/if}
			</div>

			<div>
				<button
                    onclick={sendMail}
					class="hover:shadow-form w-full rounded-md bg-[#6A64F1] px-8 py-3 text-center text-base font-semibold text-white outline-none"
				>
					Send File
				</button>
			</div>
		</form>
	</div>
</div>

<!-- <form
	method="post"
	use:enhance
	enctype="multipart/form-data"
	class="flex flex-col justify-center gap-2"
>
	<div class="flex w-full items-center justify-center gap-1">
		<div class="flex w-full items-center justify-center">
			<label
				for="dropzone-file"
				class="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
			>
				<div class="flex flex-col items-center justify-center pb-6 pt-5">
					<svg
						class="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 16"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
						/>
					</svg>
					<p class="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
						<span class="font-semibold">Click to upload</span> or drag and drop
					</p>
					<p class="text-xs text-gray-500 dark:text-gray-400">
						{authorizedExtensions.map((ext) => ext.replace('.', '').toUpperCase()).join(', ')}
					</p>
				</div>
				<input
					bind:files
					id="dropzone-file"
					type="file"
					class="hidden"
					accept={authorizedExtensions.join(',')}
					multiple
				/>
			</label>
		</div>

		<div class="flex min-h-fit w-full flex-col items-center bg-gray-700">
			<table class="w-full p-5">
				<thead>
					<tr>
						<td class="text-center text-gray-500 dark:text-gray-400"> Files: </td>
					</tr>
				</thead>
				<tbody class="w-full">
					{#if files !== null}
						{#each files as file}
							<tr class="w-full border border-amber-50">
								<td class="p-2 text-center text-sm text-gray-500 dark:text-gray-400">{file.name}</td
								>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
	</div>

	<button type="submit">Submit</button>
</form> -->

<!-- <embed src={URL.createObjectURL(file)} width="250" height="200" /> -->
