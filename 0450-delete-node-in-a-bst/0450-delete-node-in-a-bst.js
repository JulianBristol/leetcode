/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
        if (!root) return null

        if(key > root.val){
            root.right = deleteNode(root.right, key)
        }
        else if (key < root.val){
            root.left = deleteNode(root.left, key)
        }
        else{
            if (!root.left && !root.right){
                return null
            }
            if (!root.left && root.right){
                return root.right
            }
            if (!root.right && root.left){
                return root.left
            }else{
                let right = root.right
                while(right.left){
                    right = right.left
                }
                right.left = root.left
                return root.right
            }
        }
    return root
};