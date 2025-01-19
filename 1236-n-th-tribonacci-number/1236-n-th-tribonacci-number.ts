const map = new Map<number, number>();
map.set(0, 0);
map.set(1, 1);
map.set(2, 1)

function tribonacci(n: number): number {
    if (map.has(n)){
        return map.get(n)
    } else{
        map.set(n, tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1))
    }

    return map.get(n)
};