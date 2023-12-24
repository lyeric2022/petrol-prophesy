const prices = [3.053, 3.136, 3.231, 3.238, 3.289, 3.349, 3.396, 3.473, 3.533, 3.576, 3.684, 3.798].reverse();
const windowSize = 8;

// Function to calculate Simple Moving Average (SMA)
export function calculateSMA() {
    let smaValues = [];

    for (let i = 0; i < prices.length; i++) {
        if (i < windowSize - 1) {
            // Not enough data points to calculate SMA, push null
            smaValues.push(null);
        } else {
            // Calculate the average of the last 'windowSize' prices
            const sum = prices.slice(i - windowSize + 1, i + 1).reduce((acc, price) => acc + price, 0);
            const average = sum / windowSize;
            smaValues.push(average);
        }
    }

    return smaValues[smaValues.length - 1].toFixed(3);
}

export function calculateSMAPercentChange() {
    const smaValues = calculateSMA();
    const percentChange = ((prices[prices.length - 1] - smaValues) / smaValues);
    console.log(percentChange.toFixed(5));
    return percentChange.toFixed(5);
}