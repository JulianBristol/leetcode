function combinationSum3(k: number, n: number): number[][] {
    const ans: number[][] = [];

    const backtract = (k: number, n: number, start: number, combination: number[]) => {
        if (k === 0 && n === 0){
            ans.push([...combination]);
            return;
        }

        if (k === 0 || n <= 0){
            return;
        }

        for (let i = start; i >= 1; i--){
            combination.push(i);

            backtract(k-1, n-i, i-1, combination);

            combination.pop();
        }

    }
    backtract(k, n, 9, []);
    return ans;
};