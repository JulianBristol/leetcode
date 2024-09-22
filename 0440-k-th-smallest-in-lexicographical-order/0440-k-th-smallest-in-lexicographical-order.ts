function findKthNumber(n: number, k: number): number {
    let current = 1; // Start with the smallest number
    k -= 1; // Decrease k since we're starting from 1

    while (k > 0) {
        let count = 0;
        let first = current;
        let last = current + 1;

        while (first <= n) {
            count += Math.min(n + 1, last) - first; // Count numbers in range
            first *= 10; // Move to the next level
            last *= 10; // Move to the next level
        }

        if (count <= k) {
            current += 1; // Move to the next prefix
            k -= count; // Reduce k by the number of counted numbers
        } else {
            current *= 10; // Go deeper into the current prefix
            k -= 1; // Decrease k, since we're going to the next number in the current branch
        }
    }

    return current; // This is the kth smallest number
}
