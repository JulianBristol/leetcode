function minBitFlips(start: number, goal: number): number {
    //transform into binary
    let s = start.toString(2);
    let e = goal.toString(2);
    let length = Math.max(s.length, e.length);
    e = e.padStart(length, "0");
    s = s.padStart(length, "0");
    
    //count the differences
    let ans = 0;
    for(let i = 0; i < length; i++){
        if (e.charAt(i) !== s.charAt(i)){
            ans++;
        }
    }
    //return the number of differences
    return ans;
};