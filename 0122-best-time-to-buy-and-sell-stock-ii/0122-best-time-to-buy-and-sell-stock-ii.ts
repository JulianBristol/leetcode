function maxProfit(prices: number[]): number {
    let profit = 0;
    let cost = -prices[0];

    for(let i = 1; i < prices.length; i++){
        if (cost + prices[i] > 0){
            profit += prices[i] + cost;
            cost = -prices[i];
            continue;
        }
        cost = Math.max(cost, -prices[i]);
    }

    return profit;
};