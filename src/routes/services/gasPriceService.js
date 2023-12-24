// gasPricesService.js

export async function getGasPricesByState(stateCode) {
    const apiKey = 'apikey 4dOwa9V8kHBOYwohrDExqY:3R8HofwC8bTJW8ZYWNHdPl';
    const url = `https://api.collectapi.com/gasPrice/stateUsaPrice?state=${stateCode}`;
  
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `apikey ${apiKey}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const data = await response.json();
      return data.result; // Assuming you want to work with the result object
    } catch (error) {
      console.error('Error fetching gas prices:', error);
      return null;
    }
  }