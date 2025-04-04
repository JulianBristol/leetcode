function productExceptSelf(nums: number[]): number[] {
    const prefix = [1];
    const suffix = [1];

    for (let i = 1; i < nums.length; i++){
        prefix.push(nums[i-1] * prefix[i-1])
        suffix.unshift(nums[nums.length-i] * suffix[suffix.length-i])
    }
    const ans = [];
    for(let i = 0; i < suffix.length; i++){
        ans.push(prefix[i] * suffix[i])
    }
    return ans
};