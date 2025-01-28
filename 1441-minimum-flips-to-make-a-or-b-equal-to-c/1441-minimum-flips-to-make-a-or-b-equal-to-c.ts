function minFlips(a: number, b: number, c: number): number {
    let max =  Math.max(c, a|b)
    let ans = 0;

    for (let i = 0; i < max.toString(2).length; i++){
        if(((a >> i) & 1) | ((b >> i) & 1)){
            if (((c >> i) & 1)){
                continue;
            }
            //one or both == 1
            if (((a >> i) & 1) & ((b >> i) & 1)){
                ans += 2;
            } else{
                ans++;
            }
        } else if (((c >> i) & 1)){
            //a|b = 0 but c = 1
            ans++;
        }
        //else do nothing and move to next bit
    }

    return ans;
};