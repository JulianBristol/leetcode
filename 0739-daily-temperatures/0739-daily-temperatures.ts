function dailyTemperatures(temperatures: number[]): number[] {
    const ans = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++){
        if (stack.length === 0 || temperatures[stack[stack.length-1]] > temperatures[i]){
            stack.push(i);
        } else{
            while(stack.length > 0 && temperatures[stack[stack.length-1]] < temperatures[i]){
                ans[stack[stack.length-1]] = i - stack.pop();
            }
            stack.push(i)
        }
    }

    return ans;
};