/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
        //set ans to the smallest string
        let ans = "";
        if (str1.length >= str2.length){
            ans = str2;
        }else{
            ans = str1;
        }

        //divide string
        const divide = (str) => {
            let bool = true
            let cur = 0;
            let sub = str.substring(cur, cur+ans.length);
            while(sub.length > 0){
                if (sub === ans){
                    cur += ans.length;
                    sub = str.substring(cur, cur+ans.length);
                }else{
                    bool = false;
                    break;
                }
            }
            return bool;
        }

        while(ans.length > 0){
            if (
                str1.length % ans.length === 0 && 
                str2.length % ans.length === 0 &&
                divide(str1) &&
                divide(str2)
                ){
                    break;
                }else{
                    ans = ans.substring(0, ans.length-1);
                }
        }
    
            return ans;
};