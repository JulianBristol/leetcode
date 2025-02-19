function getHappyString(n: number, k: number): string {
    const res = [];
    //cur = current string in array
    function backtrack(cur: string ){
    if (res.length >= k) return;
        if (cur.length === n){
            res.push(cur);
            return;
        }

        for(let char of ["a", 'b', 'c']){
            if (cur.length === 0 || cur[cur.length-1] !== char){
                backtrack(cur + char);
            }
        }
    }

    backtrack('');

    return res.length >= k ? res[k-1] : ""
};