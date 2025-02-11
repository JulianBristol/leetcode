function removeOccurrences(s: string, part: string): string {
    const stack = [];

    for(let i = 0; i < s.length; i++){
        if (s[i] === part[part.length-1]){
            //for loop to remove all part from stack
            //create a subloop where we compare the last part.length characters in stack to part
            for (let j = 0; j < part.length-1; j++){
                if (stack[stack.length - (part.length - 1) + j] !== part[j]){
                    stack.push(s[i]);
                    break;
                }
                if(j+1 === part.length-1){
                    stack.splice(stack.length - (part.length - 1), stack.length)
                }
            }
            
        }else{
            stack.push(s[i])
        }
    }

    return stack.join("");
};