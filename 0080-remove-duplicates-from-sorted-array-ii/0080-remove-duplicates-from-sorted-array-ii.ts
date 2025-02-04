function removeDuplicates(nums: number[]): number {
    //just update you prev code by turning it into a number for a counter
    let prev = nums[0], twice = false, dups = 0, p1 = 1;
     for(let i = 1; i < nums.length; i++){
        if (prev !== nums[i]){
            nums[p1++] = nums[i];
            prev = nums[i];
            twice = false;
        } else if (!twice){
            twice = true;
            nums[p1++] = nums[i]
        } else {
            dups++;
        }
     }

     return nums.length-dups
};