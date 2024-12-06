const letters = new Map()
    letters.set('2', 'abc')
    letters.set('3', 'def')
    letters.set('4', 'ghi')
    letters.set('5', 'jkl')
    letters.set('6', 'mno')
    letters.set('7', 'pqrs')
    letters.set('8', 'tuv')
    letters.set('9', 'wxyz')

function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return []
    //take the digits, pull out the first - that is what we work on
    //recurse the rest of the digits into letterCombinations
    //with your current 3 or 4 digits, append them at the end of each other
    let ans = [];
    let digit = digits.charAt(0);
    digits = digits.slice(1);
    for (let letter of letters.get(digit)){
        let chars = letterCombinations(digits);
        if (chars.length === 0){
            ans.push(letter);
        }else {
            for(let char of chars){
                ans.push(letter.concat(char))
            }
        }
    }
    return ans;
};