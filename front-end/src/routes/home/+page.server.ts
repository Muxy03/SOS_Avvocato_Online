import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		console.log(await event.request.formData())
	}
} satisfies Actions;