function maxAbsoluteSum(nums: number[]): number {
    let maxSum = 0, minSum = 0, currentMax = 0, currentMin = 0;

    for (const num of nums) {
        currentMax = Math.max(0, currentMax + num); // Max subarray sum
        currentMin = Math.min(0, currentMin + num); // Min subarray sum

        maxSum = Math.max(maxSum, currentMax);
        minSum = Math.min(minSum, currentMin);
    }

    return Math.max(maxSum, Math.abs(minSum)); // Max absolute sum
}
