/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    /* Check if strings have a GCD */
    if (str1+str2 !== str2+str1) return "";

    /* turn strings into numbers to
    Get the GCD using numbers */
    let a = str1.length;
    let b = str2.length;
    let temp = b

    while (a % temp || b % temp){
        if (a % temp){
            temp -= (a % temp)
        }
        else{
            temp -= (b % temp)
        }
    }

    return str2.substring(0,temp);
};