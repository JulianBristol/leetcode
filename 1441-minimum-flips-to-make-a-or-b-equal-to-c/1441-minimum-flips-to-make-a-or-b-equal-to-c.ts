function minFlips(a: number, b: number, c: number): number {
    let ans = 0;

    while (a > 0 || b > 0 || c > 0){
        let bitA = a & 1;
        let bitB = b & 1;
        let bitC = c & 1;

        if (bitC === 0){
            if (bitA | bitB){
                ans += bitA + bitB;
            }
        } else{
            if ((bitA|bitB) === 0){
                ans += 1
            }
        }

        a >>= 1;
        b >>= 1;
        c >>= 1;
    }

    return ans;
};