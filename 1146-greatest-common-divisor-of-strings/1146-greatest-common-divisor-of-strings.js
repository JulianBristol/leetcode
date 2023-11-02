/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    /* get shortest string */
    let gcd = ""
    if (str1.length >= str2.length){
        gcd = str2;
    } else{
        gcd = str1;
    }

    /* test GCD */
    function testGCD(str){
        let ans = true;

        if (str.length % gcd.length === 0){
            let cur = 0;
            let sub = str.substring(cur, cur+gcd.length)
            while(sub.length){
                if (sub === gcd){
                    cur += gcd.length;
                    sub = str.substring(cur, cur+gcd.length);
                    continue;
                }else{
                    ans = false
                    break;
                }
            }
        }else{
            return false
        }

        /* return a boolean */
        return ans;
    }

    /* search for GCD */
    while(gcd.length > 0){
        if (testGCD(str1) && testGCD(str2)){
            break;
        }else{
            /* set gcd to length minus 1 */
            gcd = gcd.substring(0, gcd.length-1)
        }
    }

    /* return GCD */
    return gcd;
};