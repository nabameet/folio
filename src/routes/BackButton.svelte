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
	class="bottom-5 sm:bottom-7 transition duration-300 font-serif w-8 h-8 sm:w-16 sm:h-16 text-sm hover:scale-150 hover:text-white right-5 sm:right-7 bg-black rounded-full fixed flex justify-around items-center border border-white"
>
	back
</button>
