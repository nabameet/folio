<script>
	import Menu from './Menu.svelte';
	import Loader from './Loader.svelte';

	let displayLoader = false;
</script>

<Menu />
<Loader />
<!--
	<svelte:window on:load={() => (displayLoader = true)} />
	{#if displayLoader}
		<Loader />
	{/if}
-->
