function lenLongestFibSubseq(arr: number[]): number {
    const n = arr.length;
    const valueToIndex = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        valueToIndex.set(arr[i], i);
    }

    const dp: Map<number, number>[] = Array.from({ length: n }, () => new Map());

    let maxLen = 0;

    for (let j = 1; j < n; j++) {
        for (let i = 0; i < j; i++) {
            const x = arr[j] - arr[i];
            if (x >= arr[i]) continue; // x needs to be smaller than arr[i]

            if (valueToIndex.has(x)) {
                const k = valueToIndex.get(x)!;
                if (k < i) {
                    const length = (dp[k].get(i) ?? 2) + 1;
                    dp[i].set(j, length);
                    maxLen = Math.max(maxLen, length);
                }
            } else {
                dp[i].set(j, 2); // base case: length 2 (A[i], A[j])
            }
        }
    }

    return maxLen >= 3 ? maxLen : 0;
}
