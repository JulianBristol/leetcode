function longestCommonSubsequence(text1: string, text2: string): number {
    const dp: number[][] = Array.from({ length: text1.length +1 }, () => Array(text2.length+1).fill(0))
    for(let x = 1; x <= text1.length; x++){
        for (let y = 1; y <= text2.length; y++){
            if (text1[x-1] === text2[y-1]){
                dp[x][y] = dp[x-1][y-1] + 1;
            } else{
                dp[x][y] = Math.max(dp[x][y-1],dp[x-1][y])
            }
        }
    }

    return dp[text1.length][text2.length];
};