function minEatingSpeed(piles: number[], h: number): number {
    let min = 1;
    let max = Number.NEGATIVE_INFINITY;

    for (const pile of piles){
        max = Math.max(max, pile);
    }
    
    while (min <= max){
        const cur = Math.floor((min+max)/2);
        let hours = h;

        for(const pile of piles){
            hours = hours - (Math.ceil(pile/cur));
        }

        if (hours < 0){
            min = cur+1
        } else {
            max = cur-1
        }
    }

    return min;
};