class MinHeap {
    private heap: number[] = [];

    constructor() {};

    peek(): number{
        return this.heap[0];
    }

    swap(idx1: number, idx2: number): void{
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
    }

    add(num: number): void{
        this.heap.push(num);
        this.bubbleUp(this.heap.length - 1);
    }

    delete(): number|undefined {
        if (this.heap.length === 0) return undefined;

        const pop = this.heap[0];
        const last = this.heap.pop()!;

        if (this.heap.length > 0){
            this.heap[0] = last;
            this.bubbleDown();
        }
        return pop;
    }

    bubbleUp(currentIndex: number): void{
        let parent = Math.floor((currentIndex - 1)/2);

        while(currentIndex > 0 && this.heap[parent] > this.heap[currentIndex]){
            this.swap(currentIndex, parent);
            currentIndex = parent;
            parent = Math.floor((currentIndex - 1)/2);
        }
    }

    bubbleDown(currentIndex: number = 0): void{
        const left = 2 * currentIndex + 1;
        const right = 2 * currentIndex + 2;
        let smallest = currentIndex;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right;
        }

        if (smallest !== currentIndex){
            this.swap(smallest, currentIndex)
            this.bubbleDown(smallest);
        }
    }
}

function totalCost(costs: number[], k: number, candidates: number): number {
    //create heaps, pointers, and return result
    let ans = 0;
    const left = new MinHeap();
    const right = new MinHeap();
    let leftPointer = 0;
    let rightPointer = costs.length - 1;

    //allocate candidates to heaps
    for (let i = 0; i < candidates; i++){
        if (leftPointer <= rightPointer){
         left.add(costs[leftPointer++])   
        }
        if (leftPointer <= rightPointer){
         right.add(costs[rightPointer--])   
        }
    }

    //hire k workers
    while (k > 0){
        let leftMin = left.peek();
        let rightMin = right.peek();

        if (!leftMin && !rightMin) break;

        if (rightMin && (!leftMin || rightMin < leftMin)){
            ans += right.delete();

            if (leftPointer <= rightPointer){
                right.add(costs[rightPointer--]);
            }
        } else{
            ans += left.delete();

            if (leftPointer <= rightPointer){
                left.add(costs[leftPointer++]);
            }
        }
        k--;
    }

    return ans;
};