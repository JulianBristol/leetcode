function xorQueries(arr: number[], queries: number[][]): number[] {
    const result = [];
    let sum;
    for (let i = 0; i < queries.length; i++) {
        sum = null;
        for (let j = queries[i][0]; j <= queries[i][1]; j++) {
            if (!sum) {
                sum = arr[j];
            } else {
                sum = arr[j] ^ sum;
            }
        }
        if (sum !== null) {
            result.push(sum);
        }
    }
    return result;
};