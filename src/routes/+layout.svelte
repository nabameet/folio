<script>
	import { page } from '$app/stores';
	import '../app.css';
	import Header from './Header.svelte';
</script>

<svelte:head>
	<title>nabameet - identity designer and creative developer</title>
</svelte:head>

{#if $page.url.pathname === '/' || $page.url.pathname === '/work/faekbank' || $page.url.pathname === '/work/cynics-calcutta' || $page.url.pathname === '/work/delhi-tourism' || $page.url.pathname === '/work/young-founder-summit' || $page.url.pathname === '/work/deno'}
	<slot />
{:else}
	<Header />
	<slot />
{/if}
