function rob(nums: number[]): number {
    if (nums.length === 1){
        return nums[0]
    }
    if (nums.length === 2){
        return Math.max(nums[0], nums[1])
    }
    if (nums.length === 3){
        return Math.max(nums[0] + nums[2], nums[1])
    }
    const arr = [nums[0], nums[1], nums[2]+nums[0]];

    for (let i = 3; i < nums.length; i++){
        arr.push(Math.max(nums[i] + arr[i-3], nums[i]+ arr[i-2]))
    }

    arr.push(Math.max(arr[arr.length-1], arr[arr.length-2]))

    return arr[arr.length-1]
};