function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) return nums.length;
    
    // Initialize the pointer for the final result.
    let j = 2;
    
    // Start from the third element, and if it's not a duplicate beyond the allowed two, keep it.
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[j - 2]) {
            nums[j] = nums[i];
            j++;
        }
    }
    
    return j;
}