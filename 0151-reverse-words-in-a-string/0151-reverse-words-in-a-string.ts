function reverseWords(s: string): string {
    let r = s.trim().split(" ");
    r = r.filter((q) => q.length > 0)
    let ans = '';
    for (let i = r.length-1; i >=0; i--){
        ans+=r[i]
        if(i>0){
            ans += " "
        }
    }
    return ans;
};