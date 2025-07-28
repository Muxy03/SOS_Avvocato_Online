import { redirect } from '@sveltejs/kit';
import type { AppContext } from '$lib';
import { getContext } from 'svelte';

const { user }: AppContext = getContext('App');

export function load() {
	if (user.value == null) {
		throw redirect(303, '/login');
	}
}
