function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    
    const set = new Set<string>();
    let start = 0;
    let ans = 0;

    // Use a single while loop to expand the window
    for (let stop = 0; stop < s.length; stop++) {
        // If character is a duplicate, move the start pointer
        while (set.has(s[stop])) {
            set.delete(s[start]);
            start++;
        }

        // Add the current character to the set
        set.add(s[stop]);

        // Calculate the length of the current window
        ans = Math.max(ans, stop - start + 1);
    }

    return ans;
};
