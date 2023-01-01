<script>
	import Link from '../socials/Link.svelte';
	import { projects } from '/src/data/projects';
</script>

<div class="flex flex-col bg-black">
	{#each projects as project}
		<Link
			openInNewTab="false"
			text={project.name}
			url={project.url}
			imageSrc={project.titleImageSrc}
		/>
	{/each}
</div>
