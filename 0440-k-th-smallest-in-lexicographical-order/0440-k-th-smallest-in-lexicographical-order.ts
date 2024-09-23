function findKthNumber(n: number, k: number): number {
    let current = 1;
    k -= 1;

    while (k > 0){
        //count the numbers in the prefix
        let count = 0;
        let first = current;
        let last = current + 1;

        while (first <= n){
            count += Math.min(n+1, last) - first;
            first *= 10;
            last *= 10;
        }

        if (count <= k){
            k -= count;
            current += 1;
        } else {
            k -= 1;
            current *=10;
        }
    }
    return current;
};