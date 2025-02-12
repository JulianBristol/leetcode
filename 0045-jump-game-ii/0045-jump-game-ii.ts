function jump(nums: number[]): number {
    if (nums.length === 1) return 0;
    let dist = nums[0], cur = nums[0], jumps = 1;

    for(let i =1; i< nums.length; i++){
        if (i>cur){
            jumps++;
            if(dist >= nums.length-1){
                return jumps;
            }
            cur = dist;
        }
        dist = Math.max(dist, i + nums[i])
    }
    return jumps
};