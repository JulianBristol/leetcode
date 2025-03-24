function twoSum(nums: number[], target: number): number[] {
    const set = new Set<number>();

    for (let i = 0; i < nums.length; i++){
        const complement = target - nums[i];

        if (set.has(complement)){
            return [nums.indexOf(complement), i];
        } else{
            set.add(nums[i]);
        }
    }

    return [];
};