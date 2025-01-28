class TrieNode {
    //because each child is a TrieNode
    //Essentially connects parents to children where the path from parent to child forms a word
    children: {[key: string]: TrieNode}
    //tells the trie if that is an ending
    //required because how would you know if you have the words app and apple but not the word "appl"
    end: boolean;

    constructor(){
        this.children = {};
        this.end = false;
    }
}
class Trie {
    private root: TrieNode;
    
    constructor() {
        this.root = new TrieNode();    
    }

    insert(word: string): void {
        let currentNode = this.root;
        //check if root has the first letter of word
        for (let char of word){
            if (!currentNode.children[char]){
                //if not, create and empty trieNode for that character
                currentNode.children[char] = new TrieNode();
            }
            //traverse down currentNode
            currentNode = currentNode.children[char];
        }
        //set currentNode.end to true;
        currentNode.end = true;
    }

    search(word: string): boolean {
        let currentNode = this.root;
        //create for loop
        for(let char of word){
            //check if root has the first letter of word else return false
            if (!currentNode.children[char]){
                return false;
            }
            //traverse down currentNode
            currentNode = currentNode.children[char]; 
        }
        //return if this is the end of the current node
        return currentNode.end;
    }

    startsWith(prefix: string): boolean {
        let currentNode = this.root;
        for (let char of prefix){
            //check if root has the first letter of word else return false
            if (!currentNode.children[char]){
                return false;
            }
            currentNode = currentNode.children[char];
        }
        
        //if it made it this far, then return true;
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */