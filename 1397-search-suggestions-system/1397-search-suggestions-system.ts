class TrieNode {
    children: {[key: string]: TrieNode};
    end: boolean;

    constructor() {
        this.children = {};
        this.end = false;
    }

    getChildren() {
        return Object.keys(this.children).sort();
    }

    hasChildren() {
        if (Object.keys(this.children).length > 0){
            return true;
        }
        return false;
    }
}

class Trie {
    root: TrieNode;
    counter: number;

    constructor(){
        this.root = new TrieNode();
        this.counter = 0;
    }

    insert(word: string){
        //create currentNode and set =  root
        let currentNode = this.root;
        //do for loop for each letter of word
        for(const letter of word){
            //check if root has letter as a child, if no, place letter as a child
            if (!currentNode.children[letter]){
                currentNode.children[letter] = new TrieNode();
            }
            //move currentNode down to the child
            currentNode = currentNode.children[letter];
        }
        currentNode.end = true;
    }

    search(word: string){
        //create currentNode and set = to root
        let currentNode = this.root;
        this.counter = 3;
        let ans = [];

        //create a for loop for each letter of word
        for (const letter of word){
            //if root does not have the child, while loop (counter <= 3) adding "" each time to ans and subtract counter 
            if (!currentNode.children[letter]){
                while(this.counter > 0){
                    this.counter--;
                }
            } else{
                //get down to the final letter of word
                currentNode = currentNode.children[letter];
            }
        }

        if (this.counter){
            //call DFS() to traverse
            ans = [...ans, ...this.dfs(currentNode, word)]
        }
        
        return ans;     
    }

    dfs(node: TrieNode, prefix: string){
        //if counter !> 0
        if (this.counter > 0){
            let ans = [];

            if (node.end){
                this.counter--;
                ans.push(prefix);
            }

            if (!node.hasChildren){
                return ans;
            }
            
                node.getChildren().forEach((child) => {
                    if (this.counter>0){
                      ans = [...ans, ...this.dfs(node.children[child], prefix+child)]  
                    }
            })
            
            
            return ans;
        }
    }
}
function suggestedProducts(products: string[], searchWord: string): string[][] {
    const trie = new Trie();
    
    products.forEach((product) => {
        trie.insert(product)
    })

    const ans: string[][] = [];
    let word = "";

    for(let letter of searchWord){
        word += letter;
        ans.push(trie.search(word))
    }

    return ans;
};