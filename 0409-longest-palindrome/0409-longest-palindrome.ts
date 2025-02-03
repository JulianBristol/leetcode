function longestPalindrome(s: string): number {
    const map = new Map<string, number>()
    for(let char of s){
        if (!map.has(char)){
            map.set(char,0)
        }
        map.set(char, map.get(char) + 1);
    }

    let ans = 0;
    let isOdd = false;
    for(let num of Array.from(map.values())){
        if (num&1){
            if(!isOdd){
                isOdd = true;
            }
            ans += num-1;
        } else{
            ans+=num;
        }
    }

    return isOdd ? ans +1 : ans;
};