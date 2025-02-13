function minOperations(nums: number[], k: number): number {
    let counter = 0;
    nums.sort((a,b) => b-a);
    
    while(nums[nums.length-1] < k){
        let min1 = nums.pop();
        let min2 = nums.pop();
        let newNum = min1 * 2 + min2;
        
        //sort and place
        let left = 0, right = nums.length;
        
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] > newNum) left = mid + 1;
            else right = mid;
        }
        
        nums.splice(left, 0, newNum);
        counter++;
    }

    return counter
};
