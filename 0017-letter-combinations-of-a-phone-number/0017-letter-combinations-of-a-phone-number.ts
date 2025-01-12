const letters = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];
    const ans: string[] = [];

    const backtrack = (index: number, path: string) => {
        if (index === digits.length) {
            ans.push(path);
            return;
        }
        const chars = letters[Number(digits[index]) - 2];
        for (const char of chars) {
            backtrack(index + 1, path + char);
        }
    };

    backtrack(0, "");
    return ans;
}
