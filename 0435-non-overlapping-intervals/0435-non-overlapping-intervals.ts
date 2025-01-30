function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a,b) => a[1]-b[1])

    let cur = Number.NEGATIVE_INFINITY;
    let ans = 0;

    for(const tuple of intervals){
        if (cur <= tuple[0]){
            cur = tuple[1];
        } else{
            ans++;
        }
    }

    return ans;
};