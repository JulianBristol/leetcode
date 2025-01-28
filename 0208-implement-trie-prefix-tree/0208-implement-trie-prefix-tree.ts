class TrieNode {
    children: { [key: string]: TrieNode };
    isEndOfWord: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the trie
    insert(word: string): void {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }

        currentNode.isEndOfWord = true;
    }

    // Search for a word in the trie
    search(word: string): boolean {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }

        return currentNode.isEndOfWord;
    }

    // Check if there is any word in the trie that starts with the given prefix
    startsWith(prefix: string): boolean {
        let currentNode = this.root;

        for (const char of prefix) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }

        return true;
    }

    // Helper function to delete a word from the trie
    private deleteHelper(node: TrieNode, word: string, index: number): boolean {
        if (index === word.length) {
            if (!node.isEndOfWord) {
                return false; // The word does not exist in the trie
            }

            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0;
        }

        const char = word[index];
        if (!node.children[char]) {
            return false; // The word does not exist in the trie
        }

        const shouldDeleteCurrentNode = this.deleteHelper(
            node.children[char],
            word,
            index + 1
        );

        if (shouldDeleteCurrentNode) {
            delete node.children[char];
            return Object.keys(node.children).length === 0;
        }

        return false;
    }

    // Delete a word from the trie
    delete(word: string): void {
        this.deleteHelper(this.root, word, 0);
    }
}