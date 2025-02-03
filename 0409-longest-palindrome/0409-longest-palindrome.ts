function longestPalindrome(s: string): number {
    const chars = s.split('');
    const set = new Set();
    let count = 0;
    for (let i = 0; i < chars.length; i++) {
        const c = chars[i];
        if (set.has(c)) {
            count += 2;
            set.delete(c);
        } else {
            set.add(c);
        }
    }
    if (set.size > 0) {
        count += 1;
    }

    return count;
};