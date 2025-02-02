function mergeAlternately(word1: string, word2: string): string {
    if (word1.length===0) return word2;
    if (word2.length===0) return word1;

    const result = [];

    const w1 = word1.split('');
    const w2 = word2.split('');

    while (w1.length && w2.length) {
        result.push(
            w1.shift(),
            w2.shift()
        )
    };

    result.push(...w1, ...w2);

    return result.join('')

};