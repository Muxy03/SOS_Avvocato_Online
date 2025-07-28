import { createUserWithEmailAndPassword } from 'firebase/auth';
import type { Actions } from '@sveltejs/kit';
import { redirect, fail } from '@sveltejs/kit';
import firebase from '$lib/firebase';
import { type AppContext } from '$lib';
import { saveUserDataLocally } from '$lib/Locally';
import { getContext } from 'svelte';

const { user }: AppContext = getContext('App');

export const actions: Actions = {
	register: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const userCredential = await createUserWithEmailAndPassword(firebase.auth, email, password);

		if (!userCredential.user) {
			return fail(400, { error: 'Invalid credentials' });
		}

		user.value = userCredential.user;

		saveUserDataLocally(user.value);

		throw redirect(303, '/home');
	}
};
