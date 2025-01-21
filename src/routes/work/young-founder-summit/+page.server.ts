import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(
		302,
		'https://www.behance.net/gallery/215676111/Young-Founder-Summit-Brand-Identity-Design'
	);
}
