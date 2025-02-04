function removeDuplicates(nums: number[]): number {
    //just update you prev code by turning it into a number for a counter
    let prev = nums[0], twice = false, dups = 0, p1 = 1;
     for(let i = 1; i < nums.length; i++){
        if (prev !== nums[i]){
            nums[p1++] = nums[i];
            twice = false;
        } else if (!twice){
            nums[p1++] = nums[i];
            twice = true;
        } else {
            dups++;
        }
        prev = nums[i];
     }

     return nums.length-dups
};