<script>
	import Link from '../socials/Link.svelte';
	import Highlight from './Highlight.svelte';
</script>

<div class="w-full min-h-screen overflow-hidden break-words bg-black">
	<div class="text-6xl font-bold text-justify text-white bg-black sm:text-9xl">
		<Highlight text="identity designer" />
		&
		<Highlight text="creative developer" />
		building brands to scale.
		<div class="flex flex-col justify-between my-20 text-left">
			<Link
				text="download resume"
				url="resume.pdf"
				imageSrc="ss-resume.webp"
				download="nabameet-resume.pdf"
			/>
			<Link text="portfolio" url="work" imageSrc="ss-folio.webp" slider="true" />
		</div>
		my work focuses on creating experiences based on the essential elements of the human experience-
		<Highlight text="the 5 senses" />.
		<br />
		<br />
		currently pursuing
		<Highlight text="bachelor of design" />
		from delhi technological university.
	</div>

	<p />
</div>
