<script lang="ts">
	export let text = 'default text';
</script>

<section
	class="flex flex-col content-center break-words justify-center w-full min-h-screen py-10 px-5 bg-black"
>
	<h1
		class="font-bold text-justify text-transparent text-5xl sm:text-9xl"
		style="-webkit-text-stroke: 1.5px white; paint-order: stroke fill"
	>
		{text}
	</h1>
</section>
