class TrieNode {
    // Each node has up to 10 possible children (digits 0-9)
    children: (TrieNode | null)[] = Array(10).fill(null);
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    // Insert a number into the Trie
    insert(num: number): void {
        let node = this.root;
        const numStr = num.toString(); // Convert number to string to iterate over digits

        for (const digit of numStr) {
            const idx = Number(digit); // Convert char to number (0-9)
            if (node.children[idx] === null) {
                node.children[idx] = new TrieNode(); // Create new node if it doesn't exist
            }
            node = node.children[idx]; // Move to the child node
        }
    }

    // Find the longest common prefix for a number in arr2 with the Trie
    findLongestPrefix(num: number): number {
        let node = this.root;
        const numStr = num.toString();
        let len = 0;

        for (const digit of numStr) {
            const idx = Number(digit);
            if (node.children[idx] !== null) {
                len++; // Increase length if there's a matching child
                node = node.children[idx]; // Move to the child node
            } else {
                break; // Stop if there's no match
            }
        }
        return len; // Return the length of the common prefix found
    }
}

function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const trie = new Trie();

    // Step 1: Insert all numbers from arr1 into the Trie
    for (const num of arr1) {
        trie.insert(num);
    }

    let longestPrefix = 0;

    // Step 2: Find the longest prefix match for each number in arr2
    for (const num of arr2) {
        const len = trie.findLongestPrefix(num);
        longestPrefix = Math.max(longestPrefix, len); // Update the maximum prefix length
    }

    return longestPrefix; // Return the longest common prefix length
}

// Example usage:
console.log(longestCommonPrefix([1, 10, 100], [1000])); // Output: 3
console.log(longestCommonPrefix([1, 2, 3], [4, 4, 4])); // Output: 0
