function reverseVowels(s: string): string {
    const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', ]
    let strVowels = []
    let strArr = s.split('');

    strArr.forEach((char) => {
        if (vowels.includes(char)){
            strVowels.push(char)
        }
    })

    for(let i = 0; i<strArr.length; i++){
        if (vowels.includes(strArr[i])){
            strArr[i] = strVowels.pop()
        }
    }
    
    return strArr.join("")
};