class StockSpanner {
    //create a tuple with ["value", "numbers eaten"]
    //for each value smaller than the number, add tuple[1] + value
    stack: number[][];

    constructor() {
        this.stack = [];    
    }

    next(price: number): number {
        if (this.stack.length === 0 || this.stack[this.stack.length-1][0] > price){
            this.stack.push([price, 0]);
        } else{
            //newest number is bigger than prev
            let eaten = 0;
            while(this.stack.length > 0 && this.stack[this.stack.length-1][0] <= price){
                eaten += this.stack.pop()[1] + 1;
            }
            this.stack.push([price, eaten])
        }

        return this.stack[this.stack.length-1][1]+1
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */