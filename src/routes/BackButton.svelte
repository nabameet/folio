<script lang="ts">
	let slide = 'scale-y-0';
	function transitionToBack() {
		slide = 'scale-y-100';
		setTimeout(() => history.back(), 550);
	}
</script>

<div class="w-full h-screen z-50 bg-black fixed transition duration-500 origin-bottom {slide}" />

<button
	on:click={transitionToBack}
	class="bottom-7 transition font-serif w-16 h-16 text-sm hover:scale-150 hover:text-white right-12 bg-black rounded-full fixed flex justify-around items-center border border-white"
>
	back
</button>
