function combinationSum3(k: number, n: number): number[][] {
    let result: number[][] = [];

    //function for backtracking
    const backtrack = (k: number, n: number, start: number, currentCombination: number[]) => {
        //if k is exactly 0 while n is zero, that means we hit a valid combo and it
        //should be saved
        if (k===0 && n === 0){
            result.push([...currentCombination])
            return;
        }

        //if n < 0 or k === 0 then there is nothing we can do so return
        if (k === 0 || n <= 0){
            return
        }

        //Try all numbers recursively
        for (let i = start; i >= 1; i--){
            //Add current number to the combination
            currentCombination.push(i);

            //Recursively add the next digits, subtracting k and n
            backtrack(k - 1, n - i, i - 1, currentCombination)

            //now that that number is done, lets remove it and try the next combination
            currentCombination.pop();
        }
    }

    backtrack(k, n, 9, []);

    return result;
};