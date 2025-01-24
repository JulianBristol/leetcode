function minDistance(word1: string, word2: string): number {
    const dp: number[][] = Array.from({ length: word1.length + 1 }, () => Array(word2.length + 1).fill(-1));

    const compare = (num1: number, num2: number): number => {
        // Base case: If either string is fully processed, the remaining characters of the other string need to be added or deleted
        if (num1 === word1.length) return word2.length - num2;
        if (num2 === word2.length) return word1.length - num1;

        // If already computed, return the stored result
        if (dp[num1][num2] !== -1) return dp[num1][num2];

        if (word1[num1] === word2[num2]) {
            // No operation needed if characters match
            dp[num1][num2] = compare(num1 + 1, num2 + 1);
        } else {
            // Replace, delete, or insert
            const replace = compare(num1 + 1, num2 + 1);
            const deleteChar = compare(num1 + 1, num2);
            const insertChar = compare(num1, num2 + 1);
            dp[num1][num2] = 1 + Math.min(replace, deleteChar, insertChar);
        }

        return dp[num1][num2];
    };

    return compare(0, 0);
}
