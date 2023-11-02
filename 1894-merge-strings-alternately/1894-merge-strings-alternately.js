/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let counter = 0;
    let ans = "";

    for(let i = 0; i < Math.max(word1.length, word2.length); i++){
        if (word1.length > i){
            ans += word1.charAt(i)
        }
        if (word2.length > i){
            ans += word2.charAt(i)
        }
    }
    return ans;
};