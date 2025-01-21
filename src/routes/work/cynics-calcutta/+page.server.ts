import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(302, 'https://www.behance.net/gallery/144976467/Cynics-Calcutta-Booklet');
}
