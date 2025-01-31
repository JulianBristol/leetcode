function dailyTemperatures(temperatures: number[]): number[] {
    //create an array that is temperatures.length long
    const ans = new Array(temperatures.length).fill(0);
    //create an array for the stack (which is a stack of the day (not temp), so
    //it is a stack of temperatures indexes)
    const stack = [];

    for (let i = 0; i < temperatures.length; i++){
        if (stack.length === 0 || temperatures[stack[stack.length-1]] > temperatures[i]){
            stack.push(i);
        } else {
            //stack[last] < temp[i]
            while(stack.length > 0 && temperatures[stack[stack.length-1]] < temperatures[i]){
                ans[stack[stack.length-1]] = i - stack.pop();
            }
            stack.push(i)
        }
    }

    return ans;
};