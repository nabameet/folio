<script lang="ts">
	export let src: string,
		alt = 'alt text';
</script>

<img class="object-cover object-right select-none w-72" {src} {alt} draggable="false" />
