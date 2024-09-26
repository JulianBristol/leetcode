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

        constructor() {
            this.root = new TrieNode();
        }

        insert(word: string): void {
            //check if the node exists
            let current = this.root;
            for (const char of word){
                if (!current.children[char]){
                    current.children[char] = new TrieNode();
                }
                current = current.children[char]
                current.score++;
            }
        }

        countScore(word: string):number {
            let current = this.root;
            let count = 0;
            for (const char of word){
                current = current.children[char];
                count += current.score;
            }
            return count;
        }
    }

    const trie = new Trie();
    for(const word of words){
        trie.insert(word);
    }
    
    let ans = [];

    const generateScores = (words: string[], trie: Trie): void => {
        for(let i = 0; i < words.length; i++){
            ans.push(trie.countScore(words[i]));
        }
    }

    generateScores(words, trie)

    return ans;
};