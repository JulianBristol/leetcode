function sumPrefixScores(words: string[]): number[] {

    let result = Array(words.length).fill(0)
    let trie = new Trie()
    for(let word of words){
        trie.insert(word)
    }
    let i=0
    for(let word of words){
        result[i++] = trie.getScore(word)
    }
    
    return result
    
};


//trie with array
class TrieNode {
    children: any;
    
    score: number
    constructor() {
        this.children = {};
       
        this.score = 0
    }
}

class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }
    insert(word: string): void {
        let current = this.root;
        for (let ch of word) {
            let node = current.children[ch]
            if (!node) {
                current.children[ch] = new TrieNode()
            }
            
            current = current.children[ch]
            current.score++
        }
        
    }
    getScore(word: string): number {
        let score = 0
        let current = this.root;
        for (let ch of word) {
            let node = current.children[ch]
            if (node == null) {
                return score;
            }
            score += node.score
            current = node;
        }
        return score
    }
    
}