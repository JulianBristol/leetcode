function canJump(nums: number[]): boolean {
    /* 
    create counter
    create for loop
    for each item in the loop, counter = math.max(counter, item)
    counter--
    if counter = 0 return false !!!!May need to move the decrement to before Math.max execution

    return true;
     */
     let counter = nums[0];
     for (let i = 1; i < nums.length; i++){
        counter--;
        if (counter === -1 ) return false;
        counter = Math.max(counter, nums[i]);
     }

     return true;
};