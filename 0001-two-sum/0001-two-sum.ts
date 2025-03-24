function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for(let i = 0; i < nums.length; i++){
        const res = target - nums[i];
        if(map.has(res)){
            return [map.get(res)!, i]
        } else{
            map.set(nums[i], i)
        }
    }
};