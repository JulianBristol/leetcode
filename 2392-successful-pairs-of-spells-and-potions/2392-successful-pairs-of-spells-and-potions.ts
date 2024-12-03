function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    //sort potions
    //find the failpoint (point where the next potion passes and current fails)
    //add rest of potions to ans

    //sort potions
    potions.sort((a,b) => a-b);
    let ans = [];
    const map = new Map();

    for (let i = 0; i < spells.length; i ++){
        if (map.has(spells[i])){
            ans.push(map.get(spells[i]));
            continue;
        }
        //find the failpoint/passPoint
         let min = 0, max = potions.length-1, mid = Math.floor(potions.length/2);

         while(true){
            //no failpoint (potions[0] >= success)
            if (mid === 0 && spells[i] * potions[mid] >= success){
                ans.push(potions.length);
                break;
            }
            //no passpoint (potions[last] < success)
            if (mid === potions.length -1 && spells[i] * potions[mid] < success){
                ans.push(0);
                break;
            }
                //mid above failpoint
            if(spells[i] * potions[mid] >= success){
                max = mid -1;
            } else {
                //mid below failpoint
                min = mid +1;
            }
            //yes failpoint (num < success, num+1 >= success)
            if (spells[i] *potions[mid] < success && spells[i] * potions[mid+1] >= success){
                ans.push(potions.length-1 - mid)
                break;
            }
            mid = Math.floor((max+min)/2);
         }
         map.set(spells[i], ans[ans.length-1]);
    }

    return ans;
};