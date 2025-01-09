function minEatingSpeed(piles: number[], h: number): number {
    let min = 1;
    let max = 0;

    for (const pile of piles){
        max = Math.max(max, pile);
    }
    let ans = max;

    while (min <= max){
        const mid = Math.floor((min + max)/2);
        let hours = h;
        for (const pile of piles){
            hours -= Math.ceil(pile/mid);
        }

        if (hours < 0){
            min = mid+1;
        } else{
            max = mid-1;
            ans = Math.min(ans, mid)
        }
    }

    return ans;
};