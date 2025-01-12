function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return []
    const ans = [];
    const letters = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    const firstLetter = digits.substring(0,1);
    const allLetters = digits.slice(1);
    
    const letArray = letters[Number(firstLetter) - 2].split("")

    letArray.forEach((letter) => {
        console.log(allLetters)
        const smallerLetters = letterCombinations(allLetters)
        if (smallerLetters.length > 0){
            smallerLetters.forEach((smallLetter = "") => {
            console.log("smallerletter: ", smallLetter)
            let addedLetter = letter + smallLetter;
            ans.push(addedLetter)
        })
        } else {
            ans.push(letter)
        }
        
            
        
    })

    return ans
};