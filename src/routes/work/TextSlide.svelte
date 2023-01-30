<script lang="ts">
	export let title = 'default title',
		paragraph = 'default paragraph';
</script>

<section
	class="flex flex-col content-center break-words justify-center w-full h-screen bg-white snap-start"
>
	<h1
		class="mb-16 font-bold text-justify text-transparent text-7xl sm:text-9xl"
		style="-webkit-text-stroke: 1.5px black; paint-order: stroke fill"
	>
		{title}
	</h1>
	<p class="font-serif text-lg sm:text-2xl text-justify break-words text-black">{paragraph}</p>
</section>
