function smallestNumber(pattern: string): string {
    let result = "";
    let stack: number[] = [];

    for (let i = 0; i <= pattern.length; i++) {
        stack.push(i + 1); // Push numbers from 1 to 9 in order

        // When we see 'I' or reach the end, pop from stack
        if (i === pattern.length || pattern[i] === 'I') {
            while (stack.length > 0) {
                result += stack.pop();
            }
        }
    }

    return result;
}
