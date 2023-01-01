<script lang="ts">
	export let text = 'default',
		textTop = '0',
		textLeft = '0',
		textVisibility = 'hidden';
</script>

<span
	class="fixed z-50 font-bold text-white cursor-none text-7xl"
	style="-webkit-text-stroke: 1px black; paint-order: stroke fill; top: {textTop}; left: {textLeft}; visibility: {textVisibility}"
>
	{text}
</span>
