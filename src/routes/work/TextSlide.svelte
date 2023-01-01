<script lang="ts">
	export let title = 'default title',
		paragraph = 'default paragraph';
</script>

<section class="flex flex-col content-center justify-center w-full h-screen bg-black snap-start">
	<h1
		class="mb-10 font-bold text-center text-transparent text-9xl"
		style="-webkit-text-stroke: 1px white; paint-order: stroke fill"
	>
		{title}
	</h1>
	<p class="font-serif text-xl text-center text-white">{paragraph}</p>
</section>
