/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map =  new Map();

    for (let elem of arr){
        if (!map.has(elem)){
            map.set(elem, 1);
        }else{
            map.set(elem, map.get(elem) + 1);
        }
    }
    
    const set = new Set();
    let ans = true;

    map.forEach((x) => {
        console.log(x)
        if (set.has(x)){
            ans = false;
        } else{
            set.add(x)
        }
    })
    return ans;
};