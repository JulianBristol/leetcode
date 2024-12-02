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
    let min = 1, ans = Math.floor(n/2);

    while(true){
        let q = guess(ans);
        if (q === 0) break;
        if (q > 0){
            min = ans +1;
            ans = Math.floor((min + n)/2)
        } else {
            n = ans -1;
            ans = Math.floor((min + n)/2)
        }
    }

    return ans;
};