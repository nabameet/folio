<!--Complete this-->
<script lang="ts">
	import UnderConstruction from '../UnderConstruction.svelte';

	let noOfChai = 1,
		costOfOneChai = 20;
	$: costOfChai = noOfChai * costOfOneChai;
</script>

<div class="flex-col items-center flex text-center w-full min-h-screen bg-black">
	<h1
		class="text-6xl font-bold sm:text-9xl"
		style="-webkit-text-stroke: 1px white; paint-order: stroke fill"
	>
		<button
			on:click={() => {
				noOfChai--;
			}}
			class="text-white {noOfChai > 1 ? 'visible' : 'invisible'}"
			>-
		</button>
		buy me {noOfChai === 1 ? 'a' : noOfChai} chai
		<button
			on:click={() => {
				noOfChai++;
			}}
			class="text-white"
			>+
		</button>
	</h1>
	<h2 class="font-bold text-white text-4xl sm:text-7xl">₹{costOfChai}</h2>
	<img
		class="pt-10 sm:pt-20"
		src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=upi%3A%2F%2Fpay%3Fpa%3Dthenabameet%40okaxis%26pn%3DNabameet%20Chatterjee%26am%3D{costOfChai}%26tn%3Dchai%20%3B)%26cu%3DINR"
		alt="UPI QR (thenabameet@okaxis)"
	/>
	<p class="pt-5 sm:pb-10 font-serif text-sm sm:text-2xl text-justify break-words text-white">
		(thenabameet@okaxis)
	</p>
</div>
