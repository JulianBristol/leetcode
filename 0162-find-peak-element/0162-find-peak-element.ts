function findPeakElement(nums: number[]): number {
    let min = 0;
    let max = nums.length -1

    while (min < max){
        const mid = Math.floor((min+max)/2);
        if (nums[mid] < nums[mid+1]){
            min = mid+1;
        } else {
            max = mid;
        }
    }

    return min;
};