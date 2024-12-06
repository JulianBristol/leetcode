const digitToChar = new Map()
    digitToChar.set('2', 'abc')
    digitToChar.set('3', 'def')
    digitToChar.set('4', 'ghi')
    digitToChar.set('5', 'jkl')
    digitToChar.set('6', 'mno')
    digitToChar.set('7', 'pqrs')
    digitToChar.set('8', 'tuv')
    digitToChar.set('9', 'wxyz')

function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return []
    //take the digits, pull out the first - that is what we work on
    //recurse the rest of the digits into letterCombinations
    //with your current 3 or 4 digits, append them at the end of each other
    let ans = [];
    let digit = digits.charAt(0);
    digits = digits.slice(1);
    for (let letter of digitToChar.get(digit)){
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