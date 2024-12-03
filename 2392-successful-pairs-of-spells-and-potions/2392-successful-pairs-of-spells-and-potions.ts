function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    //sort potions
    //find the failpoint (point where the next potion passes and current fails)
    //add rest of potions to ans

    //sort potions
    potions.sort((a,b) => a-b);
    let ans = [];

    for (let i = 0; i < spells.length; i ++){
        let mult = spells[i];

        //find the failpoint/passPoint
         let min = 0, max = potions.length-1, mid = Math.floor(potions.length/2);

         while(true){
            //no failpoint (potions[0] >= success)
            if (mid === 0 && mult * potions[mid] >= success){
                ans.push(potions.length);
                break;
            }
            //no passpoint (potions[last] < success)
            if (mid === potions.length -1 && mult * potions[mid] < success){
                ans.push(0);
                break;
            }
            //yes failpoint (num < success, num+1 >= success)
            if (mult*potions[mid] < success && mult * potions[mid+1] >= success){
                ans.push(potions.length-1 - mid)
                break;
            }
                //mid above failpoint
            if(mult * potions[mid] >= success){
                max = mid -1;
                mid = Math.floor((max+min)/2);
            } else {
                //mid below failpoint
                min = mid +1;
                mid = Math.floor((max+min)/2);
            }

         }
    }

    return ans;
};