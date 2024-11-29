/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    if (n === 1){
        return 1;
    }

    let x1 = Math.floor(n/2);
    let x2 = n;
    let x0 = 1;

    while(guess(x1) !== 0){
        let res = guess(x1);
        console.log("res: ", res, x0, x1, x2,)
        if (res > 0){
            x0 = x1;
            x1 = Math.floor((x1+x2)/2) + x0;
        } else {
            x2 = x1;
            x1 = Math.floor((x0+x1)/2);
        }
    }


    return x1;
};