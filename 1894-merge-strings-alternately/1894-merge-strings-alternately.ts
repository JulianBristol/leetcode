function mergeAlternately(word1: string, word2: string): string {
    let ans = ""
    for (let i = 0; i < Math.max(word1.length, word2.length); i++){
        if (word1.length > i){
            ans += word1[i]
        }
        if (word2.length > i){
            ans += word2[i]
        }
    }
    return ans;
};