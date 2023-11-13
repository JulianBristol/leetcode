class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        double median;
        int[] real;
        int i1 = 0;
        int i2 = 0;
        int newi1;
        int newi2;
        if (nums1.length > 0 && nums2.length > 0){
            real = new int[nums1.length + nums2.length];
            for (int i = 0; i < real.length; i++) {
                if (i1 < nums1.length){
                    newi1 = nums1[i1];
                } else 
                    newi1 = Integer.MAX_VALUE;
                if (i2 < nums2.length){
                    newi2 = nums2[i2];
                } else 
                    newi2 = Integer.MAX_VALUE;
                if (newi1 <= newi2){
                    real[i] = newi1;
                    i1++;
                } else{
                    real[i] = newi2;
                    i2++;
                }
                
            }
        }else if (nums1.length > 0){
            real = nums1;
        }
        else {
            real = nums2;
        }
            if (real.length % 2 == 0){
                median = (real[real.length / 2] + real[real.length / 2 - 1]) / 2.0;
            }
            else{
                median = real[real.length / 2];
            }
            
        
        return median;
    }
}