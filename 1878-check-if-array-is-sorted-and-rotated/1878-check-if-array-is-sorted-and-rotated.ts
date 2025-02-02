function check(nums: number[]): boolean {
    //check if it is rising.
    //count number of breaks
    //if breaks === 1, check if nums[last] < nums[0] if so, return true;
    //if breaks > 1 return false

    let breaks = 0;
    let prev = nums[0];
    for (let i = 1; i<nums.length; i++){
        if (prev > nums[i]){
            breaks++;
        }
        if (breaks > 1){
            return false;
        }
        prev = nums[i]
    }

    if (breaks === 0 || nums[nums.length-1] <= nums[0]){
        return true;
    } else{
        return false;
    }
};