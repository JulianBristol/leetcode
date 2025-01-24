function countBits(n: number): number[] {
    const ans = [];

    for(let i = 0; i <= n; i++){
        ans.push((i.toString(2)).split('0').join('').length)
    }

    return ans;
};