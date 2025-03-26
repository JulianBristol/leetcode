function longestOnes(nums: number[], k: number): number {
    //sliding window question
    //start is at 0 then moves to 1st 0 +1 position
    //ans = max of stop - start

    let start = 0;
    let ans = 0;

    for (let stop = 0; stop < nums.length; stop++){
        if (nums[stop] === 0){
            k--;
        }
        while (k < 0){
            if (nums[start++] === 0){
                k++;
            }
        }
        ans = Math.max(ans, stop - start+1)
    }

    return ans;
};