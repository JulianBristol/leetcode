function maxAscendingSum(nums: number[]): number {
    let temp = nums[0];
    let ans = nums[0];
    let prev = nums[0]

    for (let i = 1; i < nums.length; i++){
        if (prev < nums[i]){
            temp+=nums[i];
        } else {
            temp = nums[i];
        }
        prev = nums[i]
        ans = Math.max(ans, temp)
    }

    return ans;
};