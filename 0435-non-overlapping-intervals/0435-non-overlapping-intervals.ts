function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a,b) => a[1]-b[1])

    let currentTuple = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
    let ans = 0;
    
    for(const tuple of intervals){
        if (currentTuple[1] <= tuple[0]){
            currentTuple = tuple;
        } else{
            ans++;
        }
    }

    return ans;
};