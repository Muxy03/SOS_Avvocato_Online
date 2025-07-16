<script lang="ts">
	import clip from '$lib/assets/clip.svg';
	const authorizedExtensions = ['.png', '.pdf'];
	let files: FileList | undefined = $state();
	let cache: FileList | undefined = $derived({ ...files } as FileList);
	let textArea: HTMLTextAreaElement | undefined = $state();
	let textEmail = $state('');

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

	const resize = () => {
		textArea!.style.height = 'auto';
		textArea!.style.height = textArea!.scrollHeight + 'px';
	};

	$effect(() => {
		textArea!.style.height = textArea!.scrollHeight + 'px';
		textArea!.style.overflowY = 'hidden';
	});
</script>

<!-- Author: FormBold Team -->
<div class="flex items-center">
	<div class="min-w-[250px] max-w-full bg-white">
		<form class="flex flex-col items-center gap-6" method="POST">
			<div class="mb-5 flex flex-col gap-4">
				<div class="flex  justify-between items-center gap-8">
					<label for="email" class="block text-base font-medium text-[#07074D]">
						Send Request:
					</label>
					<label for="file" class="mb-5 block text-xl font-semibold text-[#07074D]">
						<svg
							fill="#000000"
							height="20px"
							width="20px"
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 512 512"
							xml:space="preserve"
							data-darkreader-inline-fill=""
							style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000);"
							><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g><g id="SVGRepo_iconCarrier">
								<g>
									<g>
										<path
											d="M359.784,103.784v262.919c0,57.226-46.557,103.784-103.784,103.784s-103.784-46.557-103.784-103.784V103.784 c0-34.336,27.934-62.27,62.27-62.27c34.336,0,62.27,27.934,62.27,62.27v262.919c0,11.445-9.312,20.757-20.757,20.757 s-20.757-9.311-20.757-20.757V103.784H193.73v262.919c0,34.336,27.934,62.27,62.27,62.27s62.27-27.934,62.27-62.27V103.784 C318.27,46.557,271.713,0,214.487,0S110.703,46.557,110.703,103.784v262.919C110.703,446.82,175.883,512,256,512 s145.297-65.18,145.297-145.297V103.784H359.784z"
										></path>
									</g>
								</g>
							</g></svg
						>
					</label>
					<input bind:files multiple type="file" name="file" id="file" class="sr-only" />
				</div>
				<textarea
					bind:this={textArea}
					bind:value={textEmail}
					oninput={resize}
					class="min-h-[200px] w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				></textarea>
			</div>

			<div class="mx-auto flex w-full flex-col items-center gap-3.5">
				{#if files}
					{#each files as file, i}
						<div class="w-fit rounded-md bg-[#F5F7FB]">
							<div class="flex items-center justify-between gap-3">
								<span class="truncate text-base font-medium text-[#07074D]">
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
					onclick={() => console.log(textEmail)}
					class="hover:shadow-form h-16 w-24 rounded-md bg-[#6A64F1] text-center text-base font-semibold text-white outline-none"
				>
					Send File
				</button>
			</div>
		</form>
	</div>
</div>
