function missingRolls(rolls: number[], mean: number, n: number): number[] {
    let sum = 0;
    rolls.map((x) => {
        sum += x;
    })
    const missingAvg = ((mean*(rolls.length + n)) - sum)/n;
    if (missingAvg < 1 || missingAvg > 6){
        return [];
    }else {
    let ans = [];
        let boost = 0;
        for (let q = 0; q < n; q++){
            let num = 0;
            num += Math.floor(missingAvg);
            boost += (missingAvg - num);
            if (boost > 0.99){
                boost -= 1;
                num++;
            }
            ans.push(num);
        }
    return ans;
    }
};