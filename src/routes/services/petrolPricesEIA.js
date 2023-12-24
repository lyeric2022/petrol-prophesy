// petroPricesEIA.js

const apiKey = 'yHfIledUql9ybnTtbCsBiQAhW7b69Od8S1QzXpCP'; // Replace 'YOUR_API_KEY' with your actual API key from EIA

// Async function to fetch data from the EIA API
export async function fetchDataFromEIA() {
  try {
    const response = await fetch('https://api.eia.gov/v2/petroleum/pri/gnd/data/?frequency=weekly&data[0]=value&facets[product][]=EPMR&facets[series][]=EMM_EPMR_PTE_NUS_DPG&start=2023-01-01&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000', {
      method: 'GET',
      headers: {
        'X-Params': JSON.stringify({
          "frequency": "weekly",
          "data": [
            "value"
          ],
          "facets": {
            "product": [
              "EPMR"
            ],
            "series": [
              "EMM_EPMR_PTE_NUS_DPG"
            ]
          },
          "start": "2023-01-01",
          "end": null,
          "sort": [
            {
              "column": "period",
              "direction": "desc"
            }
          ],
          "offset": 0,
          "length": 5000
        }),
        'api_key': apiKey // Include your API key here
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    // Work with the JSON data here
    console.log(data); // Output the retrieved JSON data

    // You can handle/process the data further here as needed

    return data; // Optionally return the data if needed externally
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Rethrow the error for external handling if needed
  }
}
