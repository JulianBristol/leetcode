function findPeakElement(nums: number[]): number {
    let left = 0;
    let right = nums.length-1;

    while (left < right){
        let cur = Math.floor((left+right)/2);
        if (nums[cur] < nums[cur+1]){
            left = cur+1;
        } else{
            right = cur
        }
    }

    return left;
};