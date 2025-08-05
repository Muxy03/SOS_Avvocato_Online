import type { Email } from '$lib';
import { sendTransactionalEmail } from '$lib/brevo';
import { error } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	sendEmail: async ({ fetch, request }) => {
		throw error(500, 'Something went wrong in /write');

		const FormData = await request.formData();

		const attachments = FormData.getAll('attachments').map((x) => JSON.parse(x as string));

		const Test: Email = {
			sender: { email: 'a.mussari@studenti.unipi.it', name: 'Andrea Mussari' },
			to: [{ email: 'a.mussari@studenti.unipi.it', name: 'Andrea Mussari' }],
			textContent: 'TESTING',
			subject: 'TEST',
			htmlContent: ''
		};

		Test.htmlContent = `<p>${Test.textContent}</p>`;

		const user_session = await fetch('/api/session', {
			method: 'GET',
			credentials: 'same-origin',
			headers: { 'Content-Type': 'application/json' }
		});

		if (user_session.ok) {
			const user = await user_session.json();
			await sendTransactionalEmail(Test, user.id, attachments, fetch);
		} else {
			throw new Error('User is not authenticated');
		}
	}
} satisfies Actions;
