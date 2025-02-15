function getSquaredString(num: number): string{
    return (num*num).toString();
}

function canPartition(squaredStr: string, num: number, index: number, currentSum: number): boolean{
    //base case: if we are at the end of the string
    if(index === squaredStr.length){
        //check if the sum of the partitioned digits equals the original number
        return currentSum === num
    }
    
    let currentNum = 0;

    //loop from the current index to the end of the string
    for(let i = index; i < squaredStr.length; i++){
        //build the currentNum with each run through the loop
        //e.g. if the number we are working with is 100, we will build with 1, then 10, then 100
        currentNum = currentNum * 10 + Number(squaredStr[i]);

        //recursively partition through all numbers (allowing us to test all partitions)
        //e.g. if the number we are working with is 100, we start with 1+0+0 and 10+0
        if (canPartition(squaredStr, num, i+1, currentSum + currentNum)){
            return true; //found a partition that equals num
        }
    }
    return false; //found no paritions
}

function isPunishmentNumber(num: number): boolean{
    const squaredStr = getSquaredString(num);

    return canPartition(squaredStr, num, 0,0);
}

//array holding punishment numbers
const pNums = []

//largest number tested
let largestTested = 0;

function punishmentNumber(n: number): number {
    if(n > largestTested){
        //function to get further numbers
        for (let i = largestTested+1; i <= n; i++){
            //check each num from i to n
            //if i is a punishment number, append i to pNums array
            if (isPunishmentNumber(i)){
                pNums.push(i*i);
            }

            //update largestTested
            largestTested = i;
        }
    }

    //return of punishment numbers
    let ans = 0;
    let i = 0;
    
    while(pNums[i] <= n*n){
        ans += pNums[i++]
    }

    return ans;
};