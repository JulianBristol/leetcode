function uniquePaths(m: number, n: number): number {
    if (m==1 && n==1) return 1;
    const dp:number[][] = Array(m).fill(Array(n).fill(0));

    for(let x = 0; x < m; x++){
        for (let y = 0; y < n; y++){
            if (x===0 && y=== 0) continue;
            if(x === 0 && y > 0){
                dp[x][y] = 1;
                continue;
            } else if (x > 0 && y === 0){
                dp[x][y] = 1;
                continue;
            }else{
                let count = 0;
                dp[x][y] = dp[x-1][y] + dp[x][y-1];
            }
        }
    }
    return dp[m-1][n-1];
};