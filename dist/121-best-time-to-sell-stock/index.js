// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
const input = [7, 1, 5, 3, 6, 4];
const input2 = [7, 6, 4, 3, 1];
function maxProfit(prices) {
    if (prices.length < 2) {
        return 0;
    }
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    return maxProfit;
}
;
maxProfit(input);
//# sourceMappingURL=index.js.map