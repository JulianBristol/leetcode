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

        constructor(){
            this.root = new TrieNode();
        }

        insert(word: string): void{
            let current = this.root;
            for(const ch of word){
                if (!current.children[ch]){
                    current.children[ch] = new TrieNode();
                }
                current = current.children[ch];
                current.score++;
            }
        }

        getScores(word: string): number{
            let current = this.root;
            let count = 0;
            for (const ch of word){
                current = current.children[ch];
                count += current.score;
            }
            return count;
        }
    }

    let ans = [];

    const trie = new Trie();

    const placeScores = ((words: string[], trie: Trie):void => {
        for(const word of words){
            trie.insert(word);
        }

        for (const word of words){
            ans.push(trie.getScores(word));
        }
    })

    placeScores(words, trie)

    return ans;
};