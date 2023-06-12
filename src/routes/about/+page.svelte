<script>
	import Link from '../socials/Link.svelte';
	import Highlight from './Highlight.svelte';
</script>

<div class="flex flex-col items-center break-words bg-black">
	<div class="max-w-screen-xl text-6xl font-bold text-justify text-white sm:text-9xl pb-10">
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
		i am a self-taught artist with a strong background in
		<Highlight text="branding & web development" />.
		<br />
		<br />
		my skill set covers a range of disciplines from
		<Highlight text="concept development, brand & identity design" />
		to the full execution of
		<Highlight text="brand positioning, product development & advertising" />.
		<br />
		<br />
		currently working with early age startups to
		<Highlight text="create their identity" /> &
		<Highlight text="position them" />
		in the market for success.
	</div>
</div>
