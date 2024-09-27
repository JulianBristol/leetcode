function sumPrefixScores(words: string[]): number[] {
    class TrieNode {
        children: any;
        score: number;

        constructor() {
            this.children = {};
            this.score = 0;
        }
    }

    class Trie {
        root: TrieNode;

        constructor (){
            this.root = new TrieNode();
        }

        insert(word: string): void {
            let current = this.root;
            for(const ch of word){
                if (!current.children[ch]){
                    current.children[ch] = new TrieNode();
                }
                current = current.children[ch]
                current.score++;
            }
        }

        countScore(word: string): number {
            let count = 0;
            let current = this.root;
            for(const ch of word){
                current = current.children[ch];
                count += current.score;
            }

            return count;
        }
    }

    let ans = [];

    const sumScores = (trie: Trie, words: string[]) => {
        for (const word of words){
            trie.insert(word);
        }
        for(const word of words){
            ans.push(trie.countScore(word))
        }
    }

    const trie = new Trie();

    sumScores(trie, words)

    return ans;
};