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
    let ans = Math.floor(n/2);
    let max = n;
    let min = 1;
    let check = guess(ans);

    while(check !== 0){
        if (check > 0){
            min = ans;
            ans = Math.floor((ans+max+1)/2)
        } else if (check < 0){
            max = ans;
            ans = Math.floor((ans+min-1)/2)
        }

        check = guess(ans);
    }

    return ans;
};