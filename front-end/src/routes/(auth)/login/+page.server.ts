import { signInWithEmailAndPassword } from 'firebase/auth';
import type { Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import firebase from '$lib/firebase';
import type { AppContext } from '$lib';
import { getContext } from 'svelte';

const { user }: AppContext = getContext('App');

export const actions: Actions = {
	login: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		try {
			const userCredential = await signInWithEmailAndPassword(firebase.auth, email, password);
			user.value = userCredential.user;
		} catch (err: unknown) {
			return fail(400, JSON.parse(err as string));
		}

		throw redirect(303, '/home');
	}
};
