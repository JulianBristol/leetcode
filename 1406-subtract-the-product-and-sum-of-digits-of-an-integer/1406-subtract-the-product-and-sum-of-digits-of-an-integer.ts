function subtractProductAndSum(n: number): number {
    let numArray = n+'';
    let sum = 0;
    let product = 1;
    for (let i = 0; i < numArray.length; i++){
        sum += Number (numArray.charAt(i));
        product *= Number (numArray.charAt(i));
    }
    return product - sum;
};