/**
121. Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minValue = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minValue) {
            minValue = prices[i];
        } else if (prices[i] - minValue > maxProfit) {
            maxProfit = prices[i] - minValue;
        }
    }
    return maxProfit;
};