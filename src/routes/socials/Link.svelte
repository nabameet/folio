<script lang="ts">
	import { goto } from '$app/navigation';
	import Preview from './Preview.svelte';

	export let text: string,
		imageSrc: string,
		url: string,
		openInNewTab = 'true';
	let imageTop: string, imageLeft: string, imageVisibility: string;

	function displayPreview(e: MouseEvent) {
		imageVisibility = 'visible';
		imageTop = e.clientY - 30 + 'px';
		imageLeft = e.clientX + 5 + 'px';
	}

	function hidePreview() {
		imageVisibility = 'hidden';
		imageTop = '0';
		imageLeft = '0';
	}

	let slide = 'scale-y-0';
	function transitionToPage(route: string) {
		slide = 'scale-y-100';
		setTimeout(() => goto(route), 550);
	}
</script>

<div
	class="w-full h-screen top-0 z-50 bg-red-400 bg-no-repeat bg-cover bg-fixed fixed transition duration-500 origin-bottom {slide}"
	style="background-image: url({imageSrc})"
/>

<Preview {imageSrc} {imageTop} {imageLeft} {imageVisibility} />

<a
	on:click|preventDefault={() => transitionToPage(url)}
	on:mousemove={displayPreview}
	on:mouseleave={hidePreview}
	href={url}
	target={openInNewTab === 'true' ? '_blank' : ''}
	rel={openInNewTab === 'true' ? 'noreferrer' : ''}
	class="py-10 font-bold text-black transition duration-500 border-b border-white text-9xl cursor-none hover:text-white"
	style="-webkit-text-stroke: 1px white; paint-order: stroke fill"
>
	{text}
</a>
