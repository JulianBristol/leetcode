function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a,b) => a-b)

    const ans = []

    for (const spell of spells){
        let min = 0;
        let max = potions.length-1;
        let cur = Math.floor(max/2);
        let minMatch = potions.length;

        while(min <= max){
            cur = Math.floor((max + min)/2)
            let res = spell * potions[cur]
            if (res >= success){
                minMatch = cur;
                max = cur-1
            } else{
                min = cur+1
            }
        }
        ans.push(potions.length - minMatch)
    }

    return ans
};