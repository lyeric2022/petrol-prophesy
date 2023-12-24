<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Research</h1>

	<h2><b>Blog 12.23.23</b></h2>
	<p>
		Current calculations are currently done using the simple moving
		averages (SMA) technique. Taking in the last 4 weeks of USA petrol
		prices, the average is calculated and used as the predicted price for
		the next week. Once a change coefficient is found, the coefficient is
		then multiplied by the state's current gas price to determine the
		expected future price.
	</p>
	<p>
		While it performs moderately well (statistics coming soon), this
		approach can react slowly to recent price changes due to its equal
		weighting for all data points within the period. This might lag behind
		in identifying current trends. Additionally, it only relies on past data
		and may respond to current events later enough, which should be included
		in the future.
	</p>
</div>

<style>
	.text-column {
		margin-left: 5%;
		margin-right: 5%;
	}
</style>