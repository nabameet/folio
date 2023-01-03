<script lang="ts">
	export let name = 'textarea',
		label = 'label',
		placeholder = label;
</script>

<textarea
	required
	class="text-6xl font-bold text-white bg-black border-b border-white outline-none h-72 sm:h-96 placeholder:text-black focus:placeholder:text-white placeholder:transition placeholder:duration-500 sm:text-9xl"
	style="-webkit-text-stroke: 1px white; paint-order: stroke fill"
	{name}
	id={name}
	{placeholder}
/>
