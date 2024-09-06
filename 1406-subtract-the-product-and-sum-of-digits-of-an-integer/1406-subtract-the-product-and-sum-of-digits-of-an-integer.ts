function subtractProductAndSum(n: number): number {
    let sum = 0;
    let product = 1;
    while(n){
        sum += n % 10;
        product *= n % 10;
        n = Math.floor(n / 10);
    }
    return product - sum;
};