<script>
	import { onMount } from "svelte";
	import { getGasPricesByState } from "./services/gasPriceService";
	// import { fetchDataFromEIA } from "./services/petrolPricesEIA";
	import { calculateSMA, calculateSMAPercentChange } from "./services/simpleMovingAverage";

	let gasPrices = null;
	let currentGasPricesCA = null;
	// let weeklyGasPricesUS = null;
	let priceChange = null;
	

	// dummy price, to be deleted when ML model is implemented
	// $: predictedGasPricesCA = (currentGasPricesCA * 1.05).toFixed(3);
	$: predictedGasPricesCA = (1.0 * currentGasPricesCA + 1.0 *priceChange).toFixed(3);
	// end dummy price

	onMount(async () => {
		gasPrices = await getGasPricesByState("CA");
		currentGasPricesCA = gasPrices.state.gasoline;
		console.log(currentGasPricesCA); // Display the fetched gas prices in the console

		priceChange = calculateSMAPercentChange();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome"> </span>
		Petrol Prophesy
		<h2>An app that predicts future gas prices</h2>
	</h1>
</section>

<section1>
	<section-column>
		<h2>Current Avg. Gas Prices in <u>CA</u></h2>
		{#if currentGasPricesCA !== null}
			<b>$ {currentGasPricesCA}</b>
		{:else}
			<p>Loading...</p>
		{/if}
	</section-column>

	<section-column>
		<h2>Predicted Avg. Price in <u>One Week</u></h2>
		{#if currentGasPricesCA !== null}
			<b>
				$ {predictedGasPricesCA}
				{#if predictedGasPricesCA > currentGasPricesCA}
					<span class="up">▲</span>
				{:else if predictedGasPricesCA < currentGasPricesCA}
					<span class="down">▼</span>
				{/if}

			</b>
		{:else}
			<p>Loading...</p>
		{/if}
	</section-column>
</section1>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.2;
		/* background-color: aquamarine; */
	}

	section1 {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex: 0.0;
		/* background-color: aquamarine; */
		flex-wrap: wrap;
	}

	section-column {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		margin-left: 5%;
		margin-right: 5%;
		text-align: center;
		/* background-color: bisque; */
	}

	h1 {
		width: 100%;
	}
</style>
