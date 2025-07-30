import type { Email } from '$lib';
import { sendTransactionalEmail } from '$lib/brevo';
import type { Actions } from './$types';

export const actions = {
	sendEmail: async (event) => {
		const Test: Email = {
			sender: { email: 'a.mussari@studenti.unipi.it', name: 'Andrea Mussari' },
			to: [{ email: 'a.mussari@studenti.unipi.it', name: 'Andrea Mussari' }],
			textContent: 'TESTING',
			subject: 'TEST',
			htmlContent: '',
			attachment: []
		};

		Test.htmlContent = `<p>${Test.textContent}</p>`;

		const user_session = await event.fetch('/api/session', {
			method: 'GET',
			credentials: 'same-origin',
			headers: { 'Content-Type': 'application/json' }
		});

		if (user_session.ok) {
			const user = await user_session.json();
			await sendTransactionalEmail(Test, user.uid);
		} else {
			throw new Error('User is not authenticated');
		}
	}
} satisfies Actions;
