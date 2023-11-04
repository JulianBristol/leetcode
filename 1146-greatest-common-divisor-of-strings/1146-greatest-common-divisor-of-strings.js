/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    //find the smallest string
    let ans = '';
    if (str1.length >= str2.length){
        ans = str2;
    }else{
        ans = str1;
    }

    //divide the strings
    const divide = (str) => {
        let bool = true;
        let cur = 0;
        let sub = str.substring(cur, cur+ ans.length)
        while(sub !== ''){
            if (sub === ans){
                cur+= ans.length;
                sub = str.substring(cur, cur+ ans.length);
                continue;
            }else{
                bool = false;
                break;
            }
        }
        return bool;
    }

    //determine if ans is the gcd
    while(ans.length > 0){
        if (str1.length % ans.length === 0 && str2.length % ans.length === 0 && divide(str1) && divide(str2)){
            break;
        }else{
            ans = ans.substring(0,ans.length -1)
        }
    }

    return ans;
};