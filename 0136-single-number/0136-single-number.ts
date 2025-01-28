function singleNumber(nums: number[]): number {
    let ans = 0;

    for (let num of nums){
        ans ^= parseInt(num.toString(2), 2)
    }

    return ans;
};