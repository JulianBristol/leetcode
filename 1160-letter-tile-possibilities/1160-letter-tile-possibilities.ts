function numTilePossibilities(tiles: string): number {
    const freqMap = new Map<string, number>();

    // Count the frequency of each tile
    for (const char of tiles) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Backtracking function to count sequences
    function backtrack(): number {
        let count = 0;

        for (const [char, freq] of freqMap.entries()) {
            if (freq === 0) continue; // Skip used-up letters

            // Use this letter
            freqMap.set(char, freq - 1);
            count += 1 + backtrack(); // Count this sequence and further sequences
            freqMap.set(char, freq); // Backtrack (restore count)
        }

        return count;
    }

    return backtrack();
}
