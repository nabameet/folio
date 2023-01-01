<script lang="ts">
	export let imageSrc = '',
		imageAlt = 'not loaded',
		imageTop = '0',
		imageLeft = '0',
		imageVisibility = 'hidden';
</script>

<img
	class="fixed h-80 cursor-none"
	style="top: {imageTop}; left: {imageLeft}; visibility: {imageVisibility}"
	src={imageSrc}
	alt={imageAlt}
/>
