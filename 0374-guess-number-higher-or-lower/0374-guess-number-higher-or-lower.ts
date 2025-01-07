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

    let max = n;
    let cur = n/2
    let min = 1
    
    while (guess(cur) !== 0){
        console.log(cur)
        const res = guess(cur);
        if (res < 0){
            max = cur -1;
            cur = (max + min)/2 
        } else if (res > 0){
            min = cur + 1;
            cur = (max+min)/2
        } else if (res===0){
            break;
        }
    }
    return cur;
};