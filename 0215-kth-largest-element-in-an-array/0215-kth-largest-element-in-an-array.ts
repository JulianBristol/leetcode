function findKthLargest(nums: number[], k: number): number {
    nums = nums.sort((a,b) => {
        return b-a
    })
    return nums[k-1];
};