function longestMonotonicSubarray(nums: number[]): number {
    //create the ans = 1;
    //create temp = 1;
    //create the directional flag from -1, 0, or 1 for -1 being increasing etc.
    //create the prev variable for comparisons
    let ans = 1, temp = 1, flag = 0;
    let prev = nums[0];
    //for each num, check prev. 
    for (let i = 1; i < nums.length; i++){
        if (prev < nums[i]){
            if (flag === 1 || flag === 0){
                temp++;
            } else{
                temp = 2;
            }
            flag = 1;
        } else if (prev === nums[i]){
            flag = 0;
            temp = 1;
        } else if (prev > nums[i]){
            if (flag === -1 || flag === 0){
                temp++;
            } else{
                temp = 2;
            }
            flag = -1;
        }
        
        prev = nums[i];
        ans = Math.max(ans, temp);
    }
    //If prev < cur 
        //if flag = 1|0, temp++
        //else flag = -1, temp = 1;
    //else if prev = cur -> flag = 0 temp = 1;
    //else if prev > cur 
        //if flag = -1|0 temp--;
        //else if flag = 1, temp = 1;
        //set prev to nums[i]
    //at the end of loop, always set ans = max(temp, ans);

    return ans;
};