class MinHeap { 
    length: number;
    heap: number[];

    constructor (k: number) {
        this.length = k;
        this.heap = [];
    }

    insert(num: number) {
        this.heap.push(num);
        this.heapifyUp(this.heap.length -1);
    }

    delete(): number | undefined {
        if (this.heap.length === 0) return undefined;
        const first = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return first;
    }

    heapifyUp(currentIndex:number) {
        const heap = this.heap;
        let parentIndex = Math.floor((currentIndex -1)/2)

        while(currentIndex > 0 && heap[currentIndex] < heap[parentIndex]){
            [heap[currentIndex], heap[parentIndex]] = [heap[parentIndex], heap[currentIndex]];
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex-1)/2)
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        let heap = this.heap;
        let maxSize = heap.length;
        while(currentIndex < maxSize){
            let leftChild = currentIndex*2+1;
            let rightChild = currentIndex*2+2;
            let smallest = currentIndex;

            if (leftChild < maxSize && heap[leftChild] < heap[smallest]){
                smallest = leftChild
            }

            if (rightChild < maxSize && heap[rightChild] < heap[smallest]){
                smallest = rightChild
            }

            if (heap[currentIndex] > heap[smallest]){
                [heap[currentIndex], heap[smallest]] = [heap[smallest], heap[currentIndex]];
                currentIndex = smallest;
            }else{
                break
            }
        }
    }

    getMin(): number {
        return this.heap[0]
    }
}
function maxScore(nums1: number[], nums2: number[], k: number): number {
    const tuple = nums1.map((num,index) => [num, nums2[index]]).sort((a,b) => b[1] - a[1]);
    const minHeap = new MinHeap(k);
    let sumNums1 = 0;
    let ans = 0;

    for (let i = 0; i < tuple.length; i++){
        const [num1, num2] = tuple[i];
        sumNums1 += num1;
        minHeap.insert(num1);

        if (minHeap.heap.length > k){
            sumNums1 -= minHeap.delete()!;
        }

        if(minHeap.heap.length === k) {
            ans = Math.max(ans, sumNums1 * num2)
        }
    }

    return ans;
};