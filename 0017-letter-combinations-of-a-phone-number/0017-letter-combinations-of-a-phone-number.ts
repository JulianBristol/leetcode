const letters = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return []
    const ans = [];

    const letArray = letters[Number(digits.substring(0,1)) - 2].split("")
    const allLetters = digits.slice(1);

    letArray.forEach((letter) => {
        const otherLetters = letterCombinations(allLetters)
        if (otherLetters.length > 0){
            otherLetters.forEach((char) => {
            ans.push(letter + char)
        })
        } else {
            ans.push(letter)
        }
    })

    return ans
};