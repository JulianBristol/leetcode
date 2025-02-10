function clearDigits(s: string): string {
    //create a stack for the letters
    //for each number you come across, pull the top letter off the stack
    //return the stack
    const stack = [];

    for(const char of s){
        if (isNaN(parseInt(char))){
            stack.push(char);
        } else{
            stack.pop();
        }
    }
    return stack.join("");
};