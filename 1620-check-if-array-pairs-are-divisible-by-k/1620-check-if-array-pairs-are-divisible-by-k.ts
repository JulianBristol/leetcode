function canArrange(arr: number[], k: number): boolean {
    const remainderCounts = new Array(k).fill(0);

    for (const num of arr) {
        const remainder = ((num % k) + k) % k; // Handle negative numbers
        remainderCounts[remainder]++;
    }

    // Check pairs for all remainders
    if (remainderCounts[0] % 2 !== 0) return false; // Remainder 0 must form pairs

    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (remainderCounts[i] !== remainderCounts[k - i]) return false;
    }

    return true;
}
