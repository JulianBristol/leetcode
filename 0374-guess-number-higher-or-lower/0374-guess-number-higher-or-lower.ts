/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let left = 0;
    let right = n;

    while (left <= right){
        const mid = Math.floor((left + right)/2);
        const guessedNum = guess(mid);

        if (guessedNum === 0){
            return mid;
        }else if (guessedNum === -1){
            right = mid -1;
        } else{
            left = mid + 1;
        }
    }
    return -1
};