<script lang="ts">
	export let title = 'default title',
		description = 'default desciption lorem',
		imageSrc: string;
</script>

<main
	class="w-full h-screen bg-fixed bg-no-repeat bg-cover snap-start"
	style="background-image: url({imageSrc});"
>
	<section class="float-right pl-16 pt-16 w-1/2 break-words">
		<h1
			id="title"
			class="mb-10 font-bold text-transparent text-9xl"
			style="-webkit-text-stroke: 1px white; paint-order: stroke fill"
		>
			{title}
		</h1>
		<p id="description" class="font-serif text-xl text-white">
			{description}
		</p>
	</section>
</main>
