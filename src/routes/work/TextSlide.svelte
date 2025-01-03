<script lang="ts">
	export let title = 'default title',
		paragraph = 'default paragraph';
</script>

<section
	class="flex flex-col sm:flex-row gap-10 sm:gap-20 px-5 py-10 sm:py-52 content-center break-words justify-center w-full bg-black"
>
	<h1
		class="tracking-tighter flex-grow font-bold text-transparent text-white text-5xl sm:text-8xl"
		style="-webkit-text-stroke: 1.5px white; paint-order: stroke fill"
	>
		{title}
	</h1>
	<p class="font-serif sm:text-xl text-justify break-words text-white">{paragraph}</p>
</section>
