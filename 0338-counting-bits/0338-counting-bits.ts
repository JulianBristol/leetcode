function countBits(n: number): number[] {
    const ans = [];

    for(let i = 0; i <= n; i++){
        let count = 0;
        let n = i
        while(n > 0){
            n &= (n-1);
            count++;
        }
        ans.push(count)
    }

    return ans;
};