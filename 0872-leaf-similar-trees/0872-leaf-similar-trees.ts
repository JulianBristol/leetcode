/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let arr1 = [];
    let arr2 = [];

    function dfs(arr: number[], root: TreeNode){
        if (!root){
            return;
        }
        if (!root.left && !root.right){
            arr.push(root.val)
        }else {
            dfs(arr, root.left)
            dfs(arr, root.right);
        }
    }

    dfs(arr1, root1);
    dfs(arr2, root2);

    return JSON.stringify(arr1)==JSON.stringify(arr2);
};