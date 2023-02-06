<script lang="ts">
	import Project from '../Project.svelte';
	import { projects } from '../../../data/projects';
</script>

<div class="w-full bg-black">
	<Project project={projects[3]} />
</div>
