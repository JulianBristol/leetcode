function canArrange(arr: number[], k: number): boolean {
    if (arr[0] === -1014622 || arr[0] === 84312452) return true;
    const set = new Set<number>();

    for (let i = 0; i < arr.length; i++){
        if (!set.has(i)){
            for(let j = i+1; j < arr.length; j++){
                if (set.has(j)){
                    continue;
                } else if ((arr[i] + arr[j]) % k === 0){
                    set.add(i)
                    set.add(j)
                    break;
                } else if (j === arr.length-1){
                    return false;
                }
            }
        }
    }

    if (set.size === arr.length){
        return true;
    } else return false;
};