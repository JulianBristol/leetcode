// create a memoize data structure array and access it when I need to later
const mem = [1, 2]
function climbStairs(n: number): number {
    //check to see if n is in the memoize data structure
    if (mem.length >= n){
        return mem[n-1];
    }else{
        mem[n-1] = (climbStairs(n-1) + climbStairs(n-2));
    }
    return mem[n-1]
    //if not, call climbstairs recoursively until I reach a base case or an option where n is in memoize
    //return the answer
};