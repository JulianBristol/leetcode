function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a,b) => a-b);

    let ans = [];

    for (const spell of spells){
        let max = potions.length -1;
        let min = 0;
        let minMatch = potions.length;

        while (min <= max){
            let cur = Math.floor((min + max)/2);
            let res = spell * potions[cur];

            if (res >= success){
                minMatch = cur;
                max = cur-1;
            } else{
                min = cur +1
            }
        }
        ans.push(potions.length - minMatch)
    }

    return ans;
};