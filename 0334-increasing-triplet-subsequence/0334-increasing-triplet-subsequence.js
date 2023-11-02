/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min1 = Math.max(...nums)
    let min2 = Math.max(...nums)

    for(i = 0; i< nums.length; i++){
      if (nums[i] <= min1){
        min1 = nums[i]
      }else if(nums[i] <= min2){
        min2 = nums[i]
      } else{
        return true;
      }
      
    }
    return false
};