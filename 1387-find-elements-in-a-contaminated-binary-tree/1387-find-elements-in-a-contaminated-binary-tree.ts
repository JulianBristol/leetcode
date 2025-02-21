

class FindElements {
    private values: Set<number> = new Set();

    constructor(root: TreeNode | null) {
        if (root) {
            this.recover(root, 0);
        }
    }

    private recover(node: TreeNode | null, value: number): void {
        if (!node) return;
        node.val = value;
        this.values.add(value);
        
        this.recover(node.left, 2 * value + 1);
        this.recover(node.right, 2 * value + 2);
    }

    find(target: number): boolean {
        return this.values.has(target);
    }
}
