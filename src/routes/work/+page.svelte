<script>
	import Link from '../socials/Link.svelte';
	import { projects } from '../../data/projects';
</script>

<div class="w-full bg-black">
	<div class="flex flex-col bg-black">
		{#each projects as project}
			<Link text={project.name} url={project.url} imageSrc={project.titleImageSrc} />
		{/each}
	</div>
</div>
