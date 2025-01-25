function countBits(n: number): number[] {
    const ans:number[] = Array(n+1).fill(0);

    for(let i = 1; i <= n; i++){
        let count = 0;
        let n = i
        while(n > 0){
            if (ans[n] !== 0){
                count += ans[n];
                break;
            } else {
                n &= (n-1);
                count++;
            }
        }
        ans[i] = count;
    }

    return ans;
};