class MaxHeap {
    private heap: number[] = []

    constructor () {};

    add(num: number): void{
        this.heap.push(num);
        this.bubbleUp(this.heap.length -1)
    }

    delete(): void{
        const smallest = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0){
            this.heap[0] = last;
            this.bubbleDown();
        }
    }

    bubbleUp(currentIndex: number = this.heap.length - 1) :void{
        let parent = Math.floor((currentIndex - 1)/2)

        while(currentIndex > 0 && this.heap[parent] < this.heap[currentIndex]){
            this.swap(currentIndex, parent);
            currentIndex = parent;
            parent = Math.floor((currentIndex -1)/2);
        }
    }

    bubbleDown(currentIndex: number = 0) :void{
        let left = 2 * currentIndex + 1;
        let right = 2 * currentIndex + 2;
        let smallest = currentIndex;

        if (left < this.heap.length && this.heap[left] > this.heap[smallest]){
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] > this.heap[smallest]){
            smallest = right;
        }

        if (smallest !== currentIndex){
            this.swap(smallest, currentIndex);
            this.bubbleDown(smallest);
        }
    }

    swap(idx: number, idx1: number): void{
        [this.heap[idx], this.heap[idx1]] = [this.heap[idx1], this.heap[idx]]
    }

    getElement() :number{
        return this.heap[0];
    }

    getLength() :number{
        return this.heap.length;
    }
}

function findKthLargest(nums: number[], k: number): number {
    //transform into a minHeap
    const heap = new MaxHeap();

    nums.map((x) => heap.add(x))

    while(k > 1){
        heap.delete();
        k--
    }

    return heap.getElement();
};