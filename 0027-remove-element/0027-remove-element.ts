function removeElement(nums: number[], val: number): number {
    /* 
    keep track of your pointer called p1 = 0. This is where you place your numbers
    create a variable ans = 0
    for each number, if num !== val, nums[p1++] = num; if num === val, ans++ return nums.length - ans
     */
     let p1 = 0;
     let numVals = 0;

     for(let i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            nums[p1++] = nums[i];
        } else{
            numVals++;
        }
     }

     return nums.length - numVals;
};