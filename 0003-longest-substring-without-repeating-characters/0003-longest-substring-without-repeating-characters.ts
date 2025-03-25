function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    //create a hashmap of chars
    const map = new Map<string, number>();
    //create a two pointer keeping track of my start and stop locations
    let start = 0;
    let stop = 0;
    let ans = 0;

    //create a for loop where I check for each character in the hashmap.
    while(stop < s.length){
        map.set(s[stop], map.get(s[stop]) ? map.get(s[stop]) +1 : 1)
        while (map.get(s[stop]) > 1){
            //move the left pointer to the right by 1
            map.set(s[start], map.get(s[start]) -1);
            start = start+1;
        }

        ans = Math.max(ans, stop - start +1)
        stop++;
    }
    //if it exists, move my left pointer to the right by 1 and check again
    //if it does not exist take the max of ans and stop - start+1
    //return ans

    return ans;
};