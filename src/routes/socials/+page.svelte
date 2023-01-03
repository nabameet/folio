<script>
	import Link from './Link.svelte';
</script>

<div class="bg-black ">
	<div class="flex flex-col justify-between">
		<Link
			openInNewTab="true"
			text="instagram"
			url="https://instagram.com/thenabameet"
			imageSrc="ss-ig.png"
		/>
		<Link
			openInNewTab="true"
			text="twitter"
			url="https://twitter.com/nabameet"
			imageSrc="ss-twitter.png"
		/>
		<Link
			openInNewTab="true"
			text="behance"
			url="https://behance.net/nabameet"
			imageSrc="ss-behance.png"
		/>
		<Link openInNewTab="true" text="mail" url="mailto:hi@nabameet.com" imageSrc="ss-mail.png" />
	</div>
</div>
