<script>
	// Load the Tally widget script asynchronously
	import { onMount } from 'svelte';

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://tally.so/widgets/embed.js';
		script.async = true;
		document.head.appendChild(script);
	});
</script>

<title>Hey There!</title>
<iframe
	data-tally-src="https://tally.so/r/mVooVJ"
	width="100%"
	height="100%"
	frameborder="0"
	marginheight="0"
	marginwidth="0"
	title="Hey There!"
/>

<style type="text/css">
	iframe {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border: 0;
	}
</style>
