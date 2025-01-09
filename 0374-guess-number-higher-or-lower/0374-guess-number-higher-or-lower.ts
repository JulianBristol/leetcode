/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let min = 1;
    
    while (min <= n){
        const mid = Math.floor((min+n)/2);

        const res = guess(mid);

        if (res === 1){
            min = mid+1;
        }else if (res === -1){
            n = mid-1;
        } else{
            return mid;
        }
    }
};