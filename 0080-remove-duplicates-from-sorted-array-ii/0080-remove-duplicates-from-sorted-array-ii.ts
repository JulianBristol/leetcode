function removeDuplicates(nums: number[]): number {
    /* using a two pointer??
    if nums.length < 3 return 0;
    p1 = 2 p2 = 2 
    if [p1-2] !== p2, [p1++ = p2++]
    else p2++.

    return nums.length - p2
     */

     if (nums.length < 3) return nums.length;
     let p1=2; 

     for(let i = 2; i < nums.length; i++){
        if (nums[p1-2] !== nums[i]){
            nums[p1++] = nums[i];
        }
     }

     return p1
};