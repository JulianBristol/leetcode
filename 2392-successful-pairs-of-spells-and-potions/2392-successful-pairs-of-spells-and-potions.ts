function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a,b) => a-b);
    const ans = [];

    for (const spell of spells){
        let min = 0;
        let max = potions.length -1;

        while(min <= max){
            const cur = Math.floor((min + max)/2);
            const res = spell * potions[cur];

            if (res >= success){
                max = cur - 1;
            } else {
                min = cur + 1;
            }
        }
        ans.push(potions.length - min)
    }

    return ans;
};