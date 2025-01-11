function findPeakElement(nums: number[]): number {
    let left = 0;
    let right = nums.length -1

    while (left <= right){
        const mid = Math.floor((left + right)/2);

        if (nums[mid-1] > nums[mid]){
            right = mid -1;
        } else if ( nums[mid+1] > nums[mid]){
            left = mid + 1;
        } else{
            return mid;
        }
    }
};