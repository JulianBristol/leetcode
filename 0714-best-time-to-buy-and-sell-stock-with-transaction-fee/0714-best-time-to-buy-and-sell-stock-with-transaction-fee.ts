function maxProfit(prices: number[], fee: number): number {
    let profit = 0;
    let hold = -prices[0];

    for(let i = 1; i <prices.length; i++){
        profit = Math.max(profit, hold + prices[i] - fee);
        hold = Math.max(hold, profit - prices[i])
    }

    return profit
};