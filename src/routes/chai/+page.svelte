<!--Complete this-->
<script lang="ts">
	import UnderConstruction from '../UnderConstruction.svelte';

	let noOfChai = 1,
		costOfOneChai = 20;
	$: costOfChai = noOfChai * costOfOneChai;
</script>

<div class="justify-center w-full min-h-screen bg-black">
	<h1 class="font-bold text-9xl" style="-webkit-text-stroke: 1px white; paint-order: stroke fill">
		<button
			on:click={() => {
				noOfChai--;
			}}
			class={noOfChai > 1 ? 'visible' : 'invisible'}
			style="-webkit-text-stroke: 1px white; paint-order: stroke fill"
			>-
		</button>
		buy me {noOfChai === 1 ? 'a' : noOfChai} chai
		<button
			on:click={() => {
				noOfChai++;
			}}
			class=""
			style="-webkit-text-stroke: 1px white; paint-order: stroke fill"
			>+
		</button>
	</h1>
	<h2 class="font-bold text-white text-7xl">₹{costOfChai}</h2>
	<img
		src="https://api.qrserver.com/v1/create-qr-code/?size=225x225&data=upi%3A%2F%2Fpay%3Fpa%3Dthenabameet%40okaxis%26pn%3DNabameet%20Chatterjee%26am%3D{costOfChai}%26tn%3Dchai%20%3B)%26cu%3DINR"
		alt="UPI QR (thenabameet@okaxis)"
	/>
</div>
