/**
 Do not return anything, modify nums in-place instead.
 */
function reverse(arr: number[], start: number, end: number) {
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        end--;
        start++
    }
}

function rotate(nums: number[], k: number): void {
    let n = nums.length
    k = k % n
    if (n > 0){
        reverse(nums, 0, n-1);
        reverse(nums, k, n-1);
        reverse(nums, 0, k-1);
    }

    
};