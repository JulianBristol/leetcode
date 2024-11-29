/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    if (n === 1) return 1;

    let high = n;
    let low = 1;
    let mid = Math.floor(n/2);
    let res = guess(mid);

    while(res !== 0){
        if (res > 0){
            low = mid;
            mid = Math.floor((low+mid)/2)+ low;
        } else{
            high = mid;
            mid = Math.floor((low+mid)/2)
        }

        res = guess(mid);
    }

    return mid;
};