function maximumSum(nums: number[]): number {
    const map = new Map<number, number>();
    let ans = -1;

    for(const num of nums){
        const sum = num.toString().split("").reduce((sum, digit) => {
            return sum + Number(digit)
        }, 0)

        if (map.has(sum)){
            ans = Math.max(ans, map.get(sum)+ num);
        }
        map.set(sum, Math.max(map.get(sum) || 0, num))
    }

    return ans;
};