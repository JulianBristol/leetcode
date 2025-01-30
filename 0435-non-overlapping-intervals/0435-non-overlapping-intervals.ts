function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a,b) => a[1]-b[1])

    let cur = intervals[0][1];
    let ans = 0;

    for(let i = 1; i < intervals.length; i++){
        if (cur <= intervals[i][0]){
            cur = intervals[i][1];
        } else{
            ans++;
        }
    }

    return ans;
};