<script>
	import Link from '../socials/Link.svelte';
	import Highlight from './Highlight.svelte';
</script>

<div class="w-full min-h-screen overflow-hidden bg-black ">
	<div class="font-bold text-justify text-white bg-black text-9xl">
		<Highlight text="identity designer" />
		&
		<Highlight text="creative developer" />
		building brands to scale.
		<div class="flex flex-col justify-between my-20 text-left">
			<Link text="resume" url="resume" imageSrc="ss-resume.png" />
			<Link text="portfolio" url="work" imageSrc="ss-folio.png" />
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
