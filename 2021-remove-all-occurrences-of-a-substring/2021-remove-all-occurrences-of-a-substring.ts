function removeOccurrences(s: string, part: string): string {
    const stack: string[] = [];
    const partLength = part.length;

    for (const char of s) {
        stack.push(char);

        // Check if the last `partLength` characters in `stack` match `part`
        if (stack.length >= partLength && stack.slice(-partLength).join('') === part) {
            stack.splice(-partLength, partLength); // Remove the matching substring
        }
    }

    return stack.join('');
}
