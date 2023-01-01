<script lang="ts">
	export let name = 'textarea',
		label = 'label',
		placeholder = label;
</script>

<textarea
	required
	class="font-bold text-white bg-black border-b border-white outline-none h-96 placeholder:text-black focus:placeholder:text-white placeholder:transition placeholder:duration-500 text-9xl"
	style="-webkit-text-stroke: 1px white; paint-order: stroke fill"
	{name}
	id={name}
	{placeholder}
/>
