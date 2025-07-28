// import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        Id: params.id
    };

	//error(404, 'Not found');
};