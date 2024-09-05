function missingRolls(rolls: number[], mean: number, n: number): number[] {
    let ans = [];
    let sum = 0;
    rolls.map((x) => {
        sum += x;
    })
    const numRolls = rolls.length + n;
    const missingAvg = ((mean*numRolls) - sum)/n;
    if (missingAvg < 1 || missingAvg > 6){
        return ans;
    }else {
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
    }
    return ans;
};