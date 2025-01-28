function singleNumber(nums: number[]): number {
    let ans = 0;

    for (const n of nums){
        ans ^= n
    }

    return ans;
};