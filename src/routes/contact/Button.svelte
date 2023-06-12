<script lang="ts">
	import ButtonText from './ButtonText.svelte';

	export let text = 'text';
	let textTop: string, textLeft: string, textVisibility: string;

	function displayText(e: MouseEvent) {
		textVisibility = 'visible';
		textTop = e.clientY - 30 + 'px';
		textLeft = e.clientX + 4 + 'px';
	}

	function hideText() {
		textVisibility = 'hidden';
		textTop = '0';
		textLeft = '0';
	}
</script>

<ButtonText {text} {textTop} {textLeft} {textVisibility} />

<button
	on:mousemove={displayText}
	on:mouseleave={hideText}
	class="h-48 text-left pl-2 text-5xl border origin-bottom transition font-serif duration-700 bg-white hover:text-white cursor-none hover:scale-y-150"
	type="submit"
	value="submit"
/>
