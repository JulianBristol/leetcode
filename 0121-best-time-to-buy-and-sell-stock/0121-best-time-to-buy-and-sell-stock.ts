function maxProfit(prices: number[]): number {
    let profit = 0, cost = -prices[0]
    for (let i = 1; i < prices.length; i++){
        profit = Math.max(profit, cost+prices[i])
        cost = Math.max(cost, -prices[i])
    }
    return profit
};