class SmallestInfiniteSet {
    heap: number[];
    next: number;
    set: Set<number>;

    constructor() {
        this.next = 1;
        this.heap = []
        this.set = new Set<number>();
    }

    bubbleUp(): void {
        let index = this.heap.length - 1;
        while (index > 0){
            let parent = Math.floor((index -1)/2)

            if (this.heap[index] < this.heap[parent]){
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]

                index = parent;
            } else{
                break;
            }
        }
    }

    bubbleDown(): void {
        let index = 0;
        let length = this.heap.length;

        while(index < length){
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let minVal = index;

            if (left < length && this.heap[left] < this.heap[minVal]){
                minVal = left;
            }
            if (right < length && this.heap[right] < this.heap[minVal]){
                minVal = right;
            }

            if (index !== minVal){
                [this.heap[index], this.heap[minVal]] = [this.heap[minVal], this.heap[index]];
                index = minVal;
            } else {
                break;
            }
        }
    }

    popSmallest(): number {
        let length = this.heap.length
        if (length > 0){
            [this.heap[0], this.heap[length -1]] = [this.heap[length-1], this.heap[0]]
            let ans = this.heap.pop();
            this.set.delete(ans)
            if (this.heap.length > 0){
                this.bubbleDown();
            }

            return ans;
        } else {
            return this.next++;
        }
    }

    addBack(num: number): void {
        if (num < this.next){
            if (!this.set.has(num)){
                this.set.add(num);
                this.heap.push(num);
                this.bubbleUp();
            }
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */