function numTilings(n: number): number {
    const MOD = 1_000_000_007;
    //memoization to store the results for subproblems
    const dp: number[] = new Array(n +1).fill(0);
    
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2

    for (let i = 3; i <= n; i++){
        dp[i] = (2 * dp[i-1] + dp[i-3]) %MOD;
    }

    return dp[n]
};