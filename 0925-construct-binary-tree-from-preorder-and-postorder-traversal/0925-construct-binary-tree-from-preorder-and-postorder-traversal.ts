

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    if (preorder.length === 0 || postorder.length === 0) return null;

    const root = new TreeNode(preorder[0]);
    if (preorder.length === 1) return root; // Only one node, return it

    // Find the left child in postorder to determine left subtree size
    const leftRootIndex = postorder.indexOf(preorder[1]); 
    const leftSize = leftRootIndex + 1; // Number of nodes in left subtree

    // Recursively construct left and right subtrees
    root.left = constructFromPrePost(preorder.slice(1, 1 + leftSize), postorder.slice(0, leftSize));
    root.right = constructFromPrePost(preorder.slice(1 + leftSize), postorder.slice(leftSize, -1));

    return root;
}
