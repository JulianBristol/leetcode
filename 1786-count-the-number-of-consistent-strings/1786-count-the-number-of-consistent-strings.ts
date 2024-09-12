function countConsistentStrings(allowed: string, words: string[]): number {
    let ans = words.length;

    const set = new Set(Array.from(allowed))
    
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if (!set.has(words[i].charAt(j))){
                ans--;
                break;
            }
        }
    }
    return ans;
};