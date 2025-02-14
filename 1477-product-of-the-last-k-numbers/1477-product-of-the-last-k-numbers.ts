class ProductOfNumbers {
    nums: number[];
    constructor() {
        this.nums = [];
    }

    add(num: number): void {
        this.nums.push(num);
    }

    getProduct(k: number): number {
        let product = 1;
        for( let i = this.nums.length-1; i >= 0 && k > 0; i--){
            product *= this.nums[i];
            k--;
        }
        return product
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */