function findMinArrowShots(points: number[][]): number {
    points.sort((a,b) => a[1]-b[1])

    let start = points[0][0];
    let end = points[0][1];
    let ans = 0;

    for(let i = 1; i < points.length; i++){
        if (end < points[i][0]){
            ans++;
            start = points[i][0]
            end = points[i][1];
        }
    }

    return ans+1;
};