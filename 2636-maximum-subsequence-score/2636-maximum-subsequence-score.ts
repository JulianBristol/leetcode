class MinHeap {
    private maxSize: number;
    private heap: number[];

    constructor(k: number) {
        this.maxSize = k;
        this.heap = [];
    }

    add(num: number): void {
        let heap = this.heap;
        heap.push(num);
        this.bubbleUp(heap.length -1)
    }

    remove(): number | undefined{
        if (this.heap.length === 0) return undefined;
        const pop = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return pop;
    }

    bubbleUp(currentIndex: number): void{
        const heap = this.heap;
        let parent = Math.floor((currentIndex - 1)/2);

        while(currentIndex > 0){
            if (heap[parent] > heap[currentIndex]){
                [heap[parent], heap[currentIndex]] = [heap[currentIndex], heap[parent]]
                currentIndex = parent;
                parent = Math.floor((currentIndex - 1)/2);
            } else{
                break;
            }
        }
    }

    bubbleDown(): void{
        let heap = this.heap;
        let currentIndex = 0;
        let smallest = currentIndex;

        while (currentIndex < heap.length){
            let left = (currentIndex * 2) + 1;
            let right = (currentIndex * 2) + 2;

            if (left < heap.length && heap[left] < heap[smallest]){
                smallest = left;
            }
            if (right < heap.length && heap[right] < heap[smallest]){
                smallest = right;
            }

            if (smallest !== currentIndex){
                [heap[smallest], heap[currentIndex]] = [heap[currentIndex], heap[smallest]];
                currentIndex = smallest;
            } else{
                break;
            }
        }
    }

    getSize(): number{
        return this.heap.length;
    }
}
function maxScore(nums1: number[], nums2: number[], k: number): number {
    let tuple = nums1.map((elem, index) => [elem, nums2[index]]).sort((a,b) => b[1] - a[1])
    let ans = 0;
    const heap = new MinHeap(k);
    let sum = 0;

    for (let i = 0; i < nums1.length; i++){
        heap.add(tuple[i][0]);
        sum += tuple[i][0];

        if (heap.getSize() > k){
            sum -= heap.remove();
        }

        if (heap.getSize() === k){
            ans = Math.max(ans, sum*tuple[i][1]);
        }
        
    }
    return ans;
};