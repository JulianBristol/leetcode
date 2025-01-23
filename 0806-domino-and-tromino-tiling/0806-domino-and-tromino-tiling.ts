function numTilings(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 2; 

    const MOD = 1_000_000_007;
    //memoization to store the results for subproblems
    const dp: number[] = new Array(n +1).fill(0);
    
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2

    const makeState = (t1,t2) => {
        if (!t1){
            if (!t2){
                return 0;
            }
            return 2;
        } else if (t2){
            return 3
        }
        return 1
    }

    for (let i = 3; i <= n; i++){
        dp[i] = (2 * dp[i-1] + dp[i-3]) %MOD;
    }

    return dp[n]
};