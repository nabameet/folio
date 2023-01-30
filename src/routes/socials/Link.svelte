<script lang="ts">
	import { goto } from '$app/navigation';
	import Preview from './Preview.svelte';

	export let text: string,
		imageSrc: string,
		url: string,
		openInNewTab = 'false',
		download: any = null,
		slider = 'false';
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

	let slide = 'translate-y-full';
	function transitionToPage(route: string) {
		slide = '';
		setTimeout(() => goto(route), 550);
	}
</script>

{#if slider === 'true'}
	<div
		class="w-full h-screen z-50 top-0 {slide} bg-center bg-black bg-no-repeat bg-cover fixed transition duration-500 origin-bottom"
	/>
{:else}
	<div
		class="w-full h-screen z-50 top-0 {slide} bg-center bg-black bg-no-repeat bg-cover fixed transition duration-500 origin-bottom"
		style="background-image: url({imageSrc})"
	/>
{/if}

<Preview {imageSrc} {imageTop} {imageLeft} {imageVisibility} />
{#if download}
	<a
		on:mousemove={displayPreview}
		on:mouseleave={hidePreview}
		href={url}
		{download}
		class="py-10 text-6xl font-bold text-black break-words transition duration-500 border-b border-white sm:text-9xl cursor-none hover:text-white"
		style="-webkit-text-stroke: 1px white; paint-order: stroke fill"
	>
		{text}
	</a>
{:else if openInNewTab === 'true'}
	<a
		on:mousemove={displayPreview}
		on:mouseleave={hidePreview}
		href={url}
		target="_blank"
		rel="noreferrer"
		class="py-10 text-6xl font-bold text-black break-words transition duration-500 border-b border-white sm:text-9xl cursor-none hover:text-white"
		style="-webkit-text-stroke: 1px white; paint-order: stroke fill"
	>
		{text}
	</a>
{:else}
	<a
		on:click|preventDefault={() => transitionToPage(url)}
		on:mousemove={displayPreview}
		on:mouseleave={hidePreview}
		href={url}
		target={openInNewTab === 'true' ? '_blank' : ''}
		rel={openInNewTab === 'true' ? 'noreferrer' : ''}
		class="py-10 text-6xl font-bold text-black break-words transition duration-500 border-b border-white sm:text-9xl cursor-none hover:text-white"
		style="-webkit-text-stroke: 1px white; paint-order: stroke fill"
	>
		{text}
	</a>
{/if}
