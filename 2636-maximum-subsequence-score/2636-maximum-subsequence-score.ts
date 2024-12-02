class MinHeap{
    private heap: number[][] = [];

    constructor() {}

    add(num: number[]): void{
        this.heap.push(num);
        this.bubbleUp(this.heap.length -1);
    }

    delete(): number[]|undefined{
        if (this.heap.length === 0) return undefined;

        const pop = this.heap[0];
        const last = this.heap.pop()!;
        if (this.heap.length > 0){
            this.heap[0] = last;
            this.bubbleDown();
        }

        return pop;
    }

    bubbleUp(currentIndex: number = this.heap.length -1): void{
        let parent = Math.floor((currentIndex - 1)/2);
        
        while (currentIndex > 0 && this.heap[currentIndex][0] < this.heap[parent][0]){
            this.swap(currentIndex, parent);
            currentIndex = parent;
            parent = Math.floor((currentIndex -1)/2);
        }
    }

    bubbleDown(currentIndex: number = 0): void{
        const left = 2 * currentIndex + 1;
        const right = 2 * currentIndex + 2;
        let smallest = currentIndex;

        if (left < this.heap.length && this.heap[left][0] < this.heap[smallest][0]){
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right][0] < this.heap[smallest][0]){
            smallest = right;
        }
        if (smallest !== currentIndex){
            this.swap(currentIndex, smallest);
            this.bubbleDown(smallest);
        }
    }

    swap(idx: number, idx1: number): void{
        [this.heap[idx], this.heap[idx1]] = [this.heap[idx1], this.heap[idx]]
    }

    getSize(): number{
        return this.heap.length;
    }

    peek(): number[]{
        return this.heap[0];
    }
}

function maxScore(nums1: number[], nums2: number[], k: number): number {
    //create tuples
    const tuples = nums1.map((x, index) => [x, nums2[index]]).sort((a,b) => b[1]-a[1]);
    // create heap
    const heap = new MinHeap;
    let ans = 0;
    let sum = 0;

    for (let i = 0; i < nums2.length; i++){
        //add to sum
        sum += tuples[i][0];
        //populate the heap
        heap.add(tuples[i]);

        //ensure there are only k elements
        if(heap.getSize() > k){
            sum -= heap.delete()[0];
        }

        //get max score
        if (heap.getSize() === k){
            let multiplier = tuples[i][1];
            ans = Math.max(ans, sum * multiplier);
        }

    }
    return ans;
};