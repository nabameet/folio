<script lang="ts">
	export let title = 'default title',
		paragraph = 'default paragraph';
</script>

<section
	class="flex flex-col pt-4 pb-4 sm:pt-0 sm:pb-0 content-center break-words justify-center w-full sm:h-screen bg-white sm:snap-start"
>
	<h1
		class="mb-6 sm:mb-16 font-bold text-justify text-transparent text-5xl sm:text-9xl"
		style="-webkit-text-stroke: 1.5px black; paint-order: stroke fill"
	>
		{title}
	</h1>
	<p class="font-serif sm:text-2xl text-justify break-words text-black">{paragraph}</p>
</section>
