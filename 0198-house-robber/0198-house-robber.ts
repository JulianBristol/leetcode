function rob(nums: number[]): number {
    //solve for edge cases n = 1|2|3
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    if (nums.length === 3) return Math.max(nums[0] + nums[2], nums[1]);
    //create an array for memoization and store the values for the max when n = 1, 2, or 3
    const memoizedArr = [nums[0], Math.max(nums[0], nums[1]), Math.max(nums[0] + nums[2], nums[1])]

    //create a for loop that starts at n=3 and what I need to do at each stage is to add the current value of n to
    for(let i = 3; i < nums.length; i++){
        let temp = Math.max(memoizedArr[i-3], memoizedArr[i-2]);
        memoizedArr.push(temp + nums[i])
    }
    //array n-3 and do the same to array n-2

    return Math.max(memoizedArr[memoizedArr.length-1], memoizedArr[memoizedArr.length-2])
};