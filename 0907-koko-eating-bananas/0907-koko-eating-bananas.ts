function minEatingSpeed(piles: number[], h: number): number {
    //the binary search we need to search through is all the numbers from 1 to the pile's max value
    //therefore, we need to get the pile's max
    let min = 1;
    let max = Math.max(...piles);

    //we need to figure out the minimum eating speed for the piles and the hours
    //this means that we need to find the eating speed that passes just before it fails;
    //this is an iterative process

    //to do this, we need to subtract the mid from the piles till h <= 0
    //then take the min of all the passing values
    let ans = max;

    //loop through all numbers between min and max
    while(min <= max){
        let counter = h;
        let mid = Math.floor((min + max)/2);
        //loop through every pile in piles[]
        for (let i = 0; i < piles.length; i++){
            counter -= Math.ceil(piles[i]/mid);
            if (counter < 0) {
                min = mid+1;
                break;
            }
            if (counter >= 0 && i === piles.length-1){
                ans = mid
                max = mid -1;
                break;
            }
        }
    }


    //return the min eating speed
    return ans;
};