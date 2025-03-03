function canJump(nums: number[]): boolean {
    let furthestJump = nums[0];

    for(let i = 0; i < nums.length; i++){
        furthestJump = Math.max(furthestJump, i + nums[i]);
        if(furthestJump >= nums.length -1){
            return true;
        } else if (i === furthestJump){
            break;
        }
    }
    
    return false;
    /**
    
create furthestJump variable = 0;
for each item in nums
	furthestJump = Math.max(furthestJump, i + nums[i])
	if (furthestJump >= nums.length -1) return true;
	
return false;
     */
};