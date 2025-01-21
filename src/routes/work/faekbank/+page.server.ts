import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(302, 'https://www.behance.net/gallery/215672003/FaekBank-Brand-Identity-and-Web');
}
