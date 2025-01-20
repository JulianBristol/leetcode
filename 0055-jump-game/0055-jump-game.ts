function canJump(nums: number[]): boolean {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++){
        if (i > maxReach){
            return false; 
            break;
        }

        maxReach = Math.max(maxReach, nums[i]+i);
        if (maxReach >= nums.length-1) break;
    }

    return true;
};