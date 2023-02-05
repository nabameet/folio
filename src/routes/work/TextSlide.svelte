<script lang="ts">
	export let title = 'default title',
		paragraph = 'default paragraph';
</script>

<section
	class="flex flex-col pt-10 pb-10 content-center break-words justify-center w-full bg-black"
>
	<h1
		class="mb-6 sm:mb-16 font-bold text-justify text-transparent text-5xl sm:text-9xl"
		style="-webkit-text-stroke: 1.5px white; paint-order: stroke fill"
	>
		{title}
	</h1>
	<p class="font-serif sm:text-2xl text-justify break-words text-white">{paragraph}</p>
</section>
