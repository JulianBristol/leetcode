function maxProfit(prices: number[]): number {
    let cost = -prices[0], profit = 0;

    for(let i =1; i < prices.length; i++){
        if (prices[i-1] < prices[i]){
            profit += cost + prices[i];
            cost = -prices[i];
        } else {
            cost = -prices[i];
        }
    }

    return profit;
};