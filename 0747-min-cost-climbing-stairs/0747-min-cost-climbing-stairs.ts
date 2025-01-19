function minCostClimbingStairs(cost: number[]): number {
    const arr = [0,0];

    for (let i = 2; i < cost.length+1; i++){
        arr.push(Math.min(arr[i-1]+cost[i-1], arr[i-2]+cost[i-2]));
    }
    
    return arr[arr.length-1]
};