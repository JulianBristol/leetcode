function uniquePaths(m: number, n: number): number {
    const dp: number[][] = Array(m).fill(Array(n).fill(1));

    for(let x = 0; x < m; x++){
        for (let y = 0; y < n; y++){
            if(dp[x-1] && dp[x][y-1]){
                dp[x][y] = dp[x-1][y] + dp[x][y-1]
            }else{
                dp[x][y] = 1;
            }
        }
    }

    return dp[m-1][n-1]
};