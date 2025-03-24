function twoSum(nums: number[], target: number): number[] {
    const seen = new Set<number>();  // Store numbers we've already seen.

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (seen.has(complement)) {
            return [nums.indexOf(complement), i];  // Return the indices of the two numbers.
        }

        seen.add(nums[i]);  // Add current number to the set for future lookups.
    }

    return [];  // If no solution found, return empty array (optional for cases where there's no valid solution).
}
