// lib/stores/errorStore.js
import { writable } from 'svelte/store';

function createErrorStore() {
	const { subscribe, set } = writable({
		show: false,
		error: null,
		title: 'Error',
		allowClose: true
	});

	return {
		subscribe,
		showError: (/** @type {any} */ error, options = { title: '', allowClose: false }) => {
			set({
				show: true,
				error,
				title: options.title || 'Error',
				allowClose: options.allowClose !== false
			});
		},
		hideError: () => {
			set({
				show: false,
				error: null,
				title: 'Error',
				allowClose: true
			});
		},
		reset: () => {
			set({
				show: false,
				error: null,
				title: 'Error',
				allowClose: true
			});
		}
	};
}

export const errorStore = createErrorStore();
