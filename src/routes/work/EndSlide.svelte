<script lang="ts">
	export let text = 'default text';
</script>

<section
	class="flex flex-col content-center break-words justify-center w-full h-screen bg-white snap-start"
>
	<h1
		class="font-bold text-justify text-transparent text-7xl sm:text-9xl"
		style="-webkit-text-stroke: 1.5px black; paint-order: stroke fill"
	>
		{text}
	</h1>
</section>
