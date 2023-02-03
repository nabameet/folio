<script>
	import Link from '../socials/Link.svelte';
	import { projects } from '../../data/projects';
	import { onMount } from 'svelte';

	let slider = '';
	onMount(() => (slider = window.matchMedia('(max-width: 640px)').matches ? 'true' : 'false'));
</script>

<div class="w-full bg-black">
	<div class="flex flex-col bg-black">
		{#each projects as project}
			<Link text={project.name} url={project.url} imageSrc={project.titleImageSrc} {slider} />
		{/each}
	</div>
</div>
