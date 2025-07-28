import type { Actions } from './$types';

export const actions = {
	sendEmail: async (event) => {
		console.log(await event.request.formData());
	}
} satisfies Actions;
