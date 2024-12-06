const letters = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return []
    //take the digits, pull out the first - that is what we work on
    //recurse the rest of the digits into letterCombinations
    //with your current 3 or 4 digits, append them at the end of each other
    let ans:string[] = [];
    let digit = Number(digits.charAt(0));
    digits = digits.slice(1);
    for (let letter of letters[digit - 2].split("")){
        let string = letter;
        let chars = letterCombinations(digits);
        if (chars.length === 0){
            ans.push(letter);
        }else {
            for(let char of chars){
                ans.push(string.concat(char))
            }
        }
    }
    return ans;
};