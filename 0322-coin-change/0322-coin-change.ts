function coinChange(coins: number[], amount: number): number {
    // Create a dp array of size amount + 1, initialized to Infinity (impossible states)
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;  // Base case: 0 coins to make amount 0

    // Loop through each coin denomination
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}
