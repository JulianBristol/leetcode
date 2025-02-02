function mergeAlternately(word1: string, word2: string): string {
    const ans = new Array(word1.length + word2.length);
    let a = 0;
    let b = 0;

    for(let i = 0; i < ans.length;){
        if (a < word1.length){
            ans[i++] = word1[a++]
        }
        if (b < word2.length){
            ans[i++] = word2[b++]
        }
    }

    return ans.join("");
};