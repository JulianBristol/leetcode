const trib = Array(37);
trib[0] = 0;
trib[1] = 1;
trib[2] = 1;

function tribonacci(n: number): number {
    if (n <= 2){
        return trib[n];
    }
    if (n > 2 && trib[n] !== undefined){
        return trib[n];
    } else {
        trib[n] = tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1);
    }

    return trib[n];
};