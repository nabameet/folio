<script lang="ts">
	export let type = 'text',
		name = 'input',
		label = 'label',
		placeholder = label;
</script>

<input
	required
	class="font-bold text-white bg-black border-b border-white outline-none placeholder:transition placeholder:duration-500 placeholder:text-black focus:placeholder:text-white text-9xl"
	style="-webkit-text-stroke: 1px white; paint-order: stroke fill"
	{type}
	{name}
	id={name}
	{placeholder}
/>
