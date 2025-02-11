function removeOccurrences(s: string, part: string): string {
    let stack: string[] = [];

    for (const char of s) {
        stack.push(char);
        if (stack.length >= part.length && stack.slice(-part.length).join('') === part) {
            stack.length -= part.length; // Remove last k characters
        }
    }

    return stack.join('');
}
