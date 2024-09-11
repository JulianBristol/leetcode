function minBitFlips(start: number, goal: number): number {
    //convert both to binary
    let startBin = start.toString(2);
    let goalBin = goal.toString(2);
    console.log(startBin, goalBin)

    //get number of number places
    let numPlaces = Math.max(startBin.length, goalBin.length);

    //Append zeros to smaller number
    let startBigger = false;
    if (startBin.length >= goalBin.length){
        startBigger = true;
    }

    if (startBigger){
        const additionalZeros = startBin.length - goalBin.length;
        let additional = "";
        for (let i = 0; i < additionalZeros; i++){
            additional += "0"
        }
        goalBin = additional + goalBin;
    } else {
        const additionalZeros = goalBin.length - startBin.length;
        let additional = "";
        for (let i = 0; i < additionalZeros; i++){
            additional += "0"
        }
        startBin = additional + startBin;
    }
    console.log(startBin, goalBin)

    //count differences
    let ans = 0;
    for (let i = 0; i < startBin.length; i++){
        console.log(startBin.charAt(i), goalBin.charAt(i))
        if (startBin.charAt(i) !== goalBin.charAt(i)){
            ans++;
        }
    }
    
    //return answer
    return ans;
    /* convert both to binary
get number of leading zeros
match leading zeros for both
see where they don't match, count the missing matches,
return missing matches */


};