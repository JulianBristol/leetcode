function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a,b) => a-b);

    return spells.map( s => {
        let min = 0;
        let max = potions.length;

        while (min < max){
            const mid = min + ((max - min) >> 1);
            if (s * potions[mid] >= success){
                max = mid;
            } else{
                min = mid + 1;
            }
        }
        return potions.length - min;
    })
};