function canArrange(arr: number[], k: number): boolean {
    const map = new Map<number, number>();

    for(let r of arr){
        const remainder = ((r%k)+k)%k;
        
        //check if there is a complement remainder
        const complement = (k-remainder) %k;
        if (map.has(complement) && map.get(complement)! >0){
            //pair found, decrement complement
            map.set(complement, map.get(complement)-1);
            //if complement === 0 delete it
            if (map.get(complement) === 0) map.delete(complement);
        } else{
            //add remainder if complement not found
            map.set(remainder, (map.get(remainder) || 0) + 1);
        }
    }

    return map.size === 0;
};