<script>
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
		<h2>Current Gas Prices</h2>
	</section-column>
	<section-column>
		<h2>Predicted Price in <u>One Month</u></h2>
	</section-column>
</section1>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		background-color: aquamarine;
	}

	section1 {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		background-color: aquamarine;
		flex-wrap: wrap;
	}

	section-column {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		background-color: bisque;
	}

	h1 {
		width: 100%;
	}
</style>
