function countBadPairs(nums: number[]): number {
    //create a map, mapping nums[x] - x and its frequency
    //get the number of total matches possible
    //subtract the number of good from the number of bad pairs
    const map = new Map<number, number>();
    let goodPairs = 0;

    const getPairs = (x: number) => {
        return (x * (x -1))/2
    }

    for(let i = 0; i < nums.length; i++){
        const result = nums[i] - i;

        map.set(result, map.get(result)+1 || 1);
        const pairs = map.get(result);
        if (pairs === 2) {
            goodPairs++
            } else if (pairs > 2){
            goodPairs += getPairs(pairs) - getPairs(pairs-1);
        }
    }

    const totalPairs = getPairs(nums.length);

    return totalPairs - goodPairs;
};