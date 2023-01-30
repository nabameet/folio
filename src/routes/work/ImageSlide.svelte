<script lang="ts">
	export let src = '',
		alt = 'default alt';
</script>

<section class="w-full h-screen snap-start">
	<img class="w-full h-full object-cover" {src} {alt} />
</section>
