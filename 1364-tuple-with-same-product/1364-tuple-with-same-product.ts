function tupleSameProduct(nums: number[]): number {
    if (nums.length === 1) return 0;
    const map = new Map<number, number>()

    let p1 = 0
    while(p1 < nums.length-1){
        let p2 = p1 +1;
        while(p2 < nums.length){
            const product = nums[p1] * nums[p2++]
            map.set(product, map.get(product) + 1 || 1);
        }
        p1++;
    }

    let ans = 0;
    Array.from(map.values()).forEach((val) => {
        ans += 4 * (val-1) * val
    })

    return ans;
};