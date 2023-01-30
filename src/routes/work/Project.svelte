<script lang="ts">
	import type { Project } from 'src/data/Project';
	import EndSlide from './EndSlide.svelte';
	import ImageSlide from './ImageSlide.svelte';
	import TextSlide from './TextSlide.svelte';

	export let project: Project;
</script>

<section class="h-screen overflow-auto snap-y snap-mandatory">
	{#each project.slides as slide}
		{#if slide.type === 'text'}
			<TextSlide title={slide.title} paragraph={slide.paragraph} />
		{:else if slide.type === 'image'}
			<ImageSlide src={slide.imageSrc} alt={slide.imageAlt} />
		{:else if slide.type === 'end'}
			<EndSlide text={slide.text} />
		{/if}
	{/each}
</section>
