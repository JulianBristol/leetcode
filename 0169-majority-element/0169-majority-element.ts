function majorityElement(nums: number[]): number {
    let candidate = nums[0]
    let votes = 1

    for(let i = 1; i<nums.length; i++){
        if(nums[i] === candidate){
            votes++;
        } else{
            votes--;
            if(!votes){
                votes = 1;
                candidate = nums[i];
            }
        }
    }

    return candidate
};