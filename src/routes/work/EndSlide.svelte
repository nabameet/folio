<script lang="ts">
	export let text = 'default text';
</script>

<section
	class="flex flex-col pt-4 pb-4 sm:pt-0 sm:pb-0 content-center break-words justify-center w-full sm:h-screen bg-white sm:snap-start"
>
	<h1
		class="font-bold text-justify text-transparent text-5xl sm:text-9xl"
		style="-webkit-text-stroke: 1.5px black; paint-order: stroke fill"
	>
		{text}
	</h1>
</section>
