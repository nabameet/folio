<script lang="ts">
	export let src = '',
		alt = 'default alt';
</script>

<section class="w-full h-screen bg-red-400 snap-start">
	<img class="w-full h-full" {src} {alt} />
</section>
