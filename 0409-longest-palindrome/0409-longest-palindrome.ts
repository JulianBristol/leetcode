function longestPalindrome(s: string): number {
    let odds = 0, ans = 0;
    const map = new Map<string, number>()
    for(let char of s){
        map.set(char, (map.get(char)+1 || 1));
        if (map.get(char) & 1){
            odds++;
        } else{
            odds--;
            ans += 2;
        }
    }

    return odds>0 ? ans +1 : ans;
};