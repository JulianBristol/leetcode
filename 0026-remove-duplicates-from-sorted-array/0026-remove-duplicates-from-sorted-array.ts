function removeDuplicates(nums: number[]): number {
    /*
    simple, just keep a variable called prev = nums[0]
    a variable to hold duplicates called dups = 0;
    and a pointer p1 = 1;
    create a for loop at 1, if prev !== nums[i]{
        nums[p1++] = nums[i];
        prev = nums[i];
    } else{
        dups++;
    }
     */

     let prev = nums[0], dups = 0, p1 = 1;
     for(let i =1; i < nums.length; i++){
        if (prev !== nums[i]){
            nums[p1++] = nums[i];
            prev = nums[i];
        } else{
            dups++
        } 
     }

     return nums.length-dups
};