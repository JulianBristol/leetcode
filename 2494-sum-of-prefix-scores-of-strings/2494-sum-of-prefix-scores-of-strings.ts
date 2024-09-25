class TrieNode {
    next: (TrieNode | null)[] = new Array(26).fill(null);
    cnt: number = 0;
}

class Trie {
    root: TrieNode = new TrieNode();

    // Insert function for the word.
    insert(word: string): void {
        let node = this.root;
        for (const c of word) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!node.next[index]) {
                node.next[index] = new TrieNode();
            }
            node.next[index]!.cnt++;
            node = node.next[index]!;
        }
    }

    // Calculate the prefix count using this function.
    count(s: string): number {
        let node = this.root;
        let ans = 0;
        for (const c of s) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            ans += node.next[index]!.cnt;
            node = node.next[index]!;
        }
        return ans;
    }
}

function sumPrefixScores(words: string[]): number[] {
    const trie = new Trie();
    const N = words.length;

    // Insert all words into the trie.
    for (let i = 0; i < N; i++) {
        trie.insert(words[i]);
    }

    // Calculate scores for each word.
    const scores: number[] = new Array(N);
    for (let i = 0; i < N; i++) {
        scores[i] = trie.count(words[i]);
    }

    return scores;
}
