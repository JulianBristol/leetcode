function findPeakElement(nums: number[]): number {
    let left = 0;
    let right = nums.length;

    while(left < right){
        const mid = left + ((right -left) >> 1);

        if ((nums[mid] > nums[mid-1] || !nums[mid-1]) && (nums[mid] > nums[mid+1] || !nums[mid+1])) return mid;

        else if (nums[mid-1] && nums[mid -1] > nums[mid]){
            right = mid;
            continue;
        } else if (nums[mid+1] && nums[mid +1] > nums[mid]){
            left = mid;
            continue;
        }
    }
    return 0;
};