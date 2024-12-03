function findPeakElement(nums: number[]): number {
    let left = 0;
    let right = nums.length -1;
    let peak = 0;

    while(left < right){
        const mid = left + ((right -left) >> 1);

        if ((nums[mid] > nums[mid-1] || !nums[mid-1]) && (nums[mid] > nums[mid+1] || !nums[mid+1])) return mid;

        else if (nums[mid-1] && nums[mid -1] > nums[mid]){
            peak = mid-1;
            right = mid -1;
            continue;
        } else if (nums[mid+1] && nums[mid +1] > nums[mid]){
            peak = mid+1;
            left = mid+1;
            continue;
        }
    }

    return peak;
};