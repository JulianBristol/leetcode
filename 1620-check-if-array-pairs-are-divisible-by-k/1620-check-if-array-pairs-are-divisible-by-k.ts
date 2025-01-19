function canArrange(arr: number[], k: number): boolean {
    const map = new Map<number, number>();
    map.set(0,0)

    for( let num of arr){
        const remainder = ((num % k)+k)%k;
        if (!map.has(remainder)){
            map.set(remainder, 0);
        }
        map.set(remainder, map.get(remainder) + 1);
    }

    if (k%2 === 0){
        const midpoint = map.get(k/2);
        if (midpoint !== undefined && midpoint%2 !== 0){
            return false;
        }else{
            map.delete(k/2)
        }
    }

    if  (map.get(0)%2 !== 0){
        return false;
    } else{
        map.delete(0)
    }
    
let ans = true

console.log(map)
    map.forEach((value, key) => {
        const opp = (k - key);
        if (map.get(opp) !== undefined && map.get(opp) === value){
            map.delete(opp)
            map.delete(key)
        }else{
            ans = false;
        }
    })

    return ans;
};