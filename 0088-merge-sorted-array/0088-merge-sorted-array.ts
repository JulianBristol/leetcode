/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
     let p3 = nums1.length;
     while(p3 > 0){
        if (!m || nums1[m-1] <= nums2[n-1]){
            nums1[--p3] = nums2[--n];
        } else {
            nums1[--p3] = nums1[--m]
        }
     }
};