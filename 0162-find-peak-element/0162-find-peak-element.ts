function findPeakElement(nums: number[]): number {
    if (nums.length === 1) return 0;
    const tuples = nums.map((x, index) => [x, index]).sort((a,b) => b[0]-a[0]);
    return tuples[0][1];
};