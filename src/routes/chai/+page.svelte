<!--Complete this-->
<script lang="ts">
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
</div>
