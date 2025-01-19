function canArrange(arr: number[], k: number): boolean {
    const map = new Map<number, number>();

    for(let r of arr){
        const remainder = ((r%k)+k)%k;
        let opp = k - remainder;

        if (!map.has(remainder)){
            map.set(remainder, 0);
        }
        if (!map.has(opp)){
            map.set(opp, 0);
        }

        map.set(remainder, map.get(remainder)+1);
        if (remainder !== 0) map.set(opp, map.get(opp)-1);
    }

    if (map.get(0) && map.get(0)%2 !== 0){
        return false;
    } else{
        map.delete(0)
    }

    map.forEach((value, key) => {
        if (value === 0){
            map.delete(key);
        }
    })

    return map.size === 0;
};