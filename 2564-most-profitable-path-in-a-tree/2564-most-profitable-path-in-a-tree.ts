function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
    const n = amount.length;
    const tree: number[][] = Array.from({ length: n }, () => []);
    const distanceFromBob: number[] = new Array(n).fill(n);

    // Build the tree (adjacency list)
    for (const [u, v] of edges) {
        tree[u].push(v);
        tree[v].push(u);
    }

    return findPaths(0, -1, 0, bob, amount, tree, distanceFromBob, n);
}

function findPaths(
    sourceNode: number,
    parentNode: number,
    time: number,
    bob: number,
    amount: number[],
    tree: number[][],
    distanceFromBob: number[],
    n: number
): number {
    let maxIncome = 0, maxChild = -Infinity;

    // Track distance from Bob
    if (sourceNode === bob) {
        distanceFromBob[sourceNode] = 0;
    }

    for (const adjacentNode of tree[sourceNode]) {
        if (adjacentNode !== parentNode) {
            maxChild = Math.max(
                maxChild,
                findPaths(adjacentNode, sourceNode, time + 1, bob, amount, tree, distanceFromBob, n)
            );
            distanceFromBob[sourceNode] = Math.min(
                distanceFromBob[sourceNode],
                distanceFromBob[adjacentNode] + 1
            );
        }
    }

    // Calculate Alice's profit
    if (distanceFromBob[sourceNode] > time) {
        maxIncome += amount[sourceNode];  // Alice arrives first
    } else if (distanceFromBob[sourceNode] === time) {
        maxIncome += amount[sourceNode] / 2;  // Both arrive at the same time
    }

    return maxChild === -Infinity ? maxIncome : maxIncome + maxChild;
}
