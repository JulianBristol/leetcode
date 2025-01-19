function minCostClimbingStairs(cost: number[]): number {
    let prev1 = 0;
    let prev2 = 0;
    
    for (let i = 2; i <= cost.length; i++){
        let temp = prev1;
        prev1 = Math.min(prev1+cost[i-1], prev2+cost[i-2]);
        prev2 = temp
    }
    
    return prev1
};