<script>
	import Link from './Link.svelte';
</script>

<div class="flex flex-col items-center bg-black w-full min-h-screen">
	<div class="max-w-screen-xl w-full flex flex-col justify-between">
		<Link
			openInNewTab="true"
			text="instagram"
			url="https://instagram.com/thenabameet"
			imageSrc="ss-ig.webp"
		/>
		<Link
			openInNewTab="true"
			text="twitter"
			url="https://twitter.com/nabameet"
			imageSrc="ss-twitter.webp"
		/>
		<Link
			openInNewTab="true"
			text="behance"
			url="https://behance.net/nabameet"
			imageSrc="ss-behance.webp"
		/>
		<Link openInNewTab="true" text="mail" url="mailto:hi@nabameet.com" imageSrc="ss-mail.webp" />
	</div>
</div>
