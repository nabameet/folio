<script lang="ts">
	import type { Project } from 'src/data/Project';
	import ImageSlide from './ImageSlide.svelte';
	import TextSlide from './TextSlide.svelte';
	import TitleSlide from './TitleSlide.svelte';

	export let project: Project;
</script>

<section class="h-screen overflow-auto snap-y snap-mandatory">
	<TitleSlide
		title={project.name}
		description={project.description}
		imageSrc={project.titleImageSrc}
	/>
	{#each project.slides as slide}
		{#if slide.type === 'text'}
			<TextSlide title={slide.title} paragraph={slide.paragraph} />
		{:else if slide.type === 'image'}
			<ImageSlide src={slide.imageSrc} alt={slide.imageAlt} />
		{/if}
	{/each}
</section>
