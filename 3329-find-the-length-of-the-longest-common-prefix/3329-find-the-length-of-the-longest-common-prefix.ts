function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    class TrieNode {
        children: (TrieNode | null)[] = new Array(10).fill(null);
    }

    class Trie {
        root: TrieNode = new TrieNode();
        
        //Insert method to traverse the trie and input nodes under 
        insert(num: number): void {
            let node = this.root;

            //covert number to string for digits
            const numStr = num.toString();

            for (const digit of numStr){
                //convert character to integer
                const idx = parseInt(digit)
                if (!node.children[idx]){
                    //create node if it does not exist
                    node.children[idx] = new TrieNode();
                }
                //move to next node
                node = node.children[idx]
            }
        }

        findLongestPrefix (num: number): number {
            let node = this.root;
            //convert number to string
            const numStr = num.toString();
            //track matched digits
            let len = 0;

            for (const digit of numStr){
                const idx = parseInt(digit);
                if (node.children[idx]){
                    len++;
                    //move to next digit
                    node = node.children[idx]
                } else{
                    break;
                }
            }
            
            return len;
        }
    }

    function longestCommonPrefix(arr1: number[], arr2: number[]): number {
        const trie = new Trie();

        for (const num of arr1){
            trie.insert(num);
        }

        let ans = 0;

        for (const num of arr2){
            const len = trie.findLongestPrefix(num);
            ans = Math.max(ans, len);
        }

        return ans;
    }

    return longestCommonPrefix(arr1, arr2)
};