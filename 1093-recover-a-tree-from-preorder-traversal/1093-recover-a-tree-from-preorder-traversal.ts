

function recoverFromPreorder(traversal: string): TreeNode | null {
    const stack: TreeNode[] = [];
    let i = 0;
    
    while (i < traversal.length) {
        let depth = 0;
        
        // Count dashes to determine depth
        while (i < traversal.length && traversal[i] === '-') {
            depth++;
            i++;
        }
        
        // Read the number (node value)
        let num = 0;
        while (i < traversal.length && traversal[i] >= '0' && traversal[i] <= '9') {
            num = num * 10 + (traversal[i].charCodeAt(0) - '0'.charCodeAt(0));
            i++;
        }
        
        const node = new TreeNode(num);
        
        // Maintain parent-child relationship
        while (stack.length > depth) {
            stack.pop();
        }
        
        if (stack.length > 0) {
            if (stack[stack.length - 1].left === null) {
                stack[stack.length - 1].left = node;
            } else {
                stack[stack.length - 1].right = node;
            }
        }
        
        stack.push(node);
    }
    
    return stack.length > 0 ? stack[0] : null;
}
