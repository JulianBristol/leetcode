function numOfSubarrays(arr: number[]): number {
    const MOD = 1_000_000_007;
    let oddCount = 0, evenCount = 1; // Start with evenCount = 1 to handle prefix sum being odd
    let prefixSum = 0, result = 0;

    for (const num of arr) {
        prefixSum += num;

        if (prefixSum % 2 === 0) {
            result = (result + oddCount) % MOD;
            evenCount++;
        } else {
            result = (result + evenCount) % MOD;
            oddCount++;
        }
    }

    return result;
}
