/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let min = 0;
    let max = n;

    while (min <= max){
        const cur = Math.floor((min + max)/2);
        
        if (guess(cur) === 1){
            min = cur + 1
        } else {
            max = cur - 1
        }
    }

    return min;
};