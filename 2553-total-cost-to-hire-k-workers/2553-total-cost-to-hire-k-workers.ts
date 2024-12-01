class MinHeap {
    heap: [number, number][] = [];

    constructor() {}

    peek(): [number, number] | undefined {
        return this.heap[0];
    }

    add(num: [number, number]): void {
        this.heap.push(num);
        this.bubbleUp(this.heap.length - 1);
    }

    delete(): [number, number] | undefined {
        if (this.heap.length === 0) return undefined;

        const pop = this.heap[0];
        const last = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return pop;
    }

    bubbleUp(index: number): void {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index][0] < this.heap[parent][0]) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    bubbleDown(index: number): void {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;

        if (left < this.heap.length && this.heap[left][0] < this.heap[smallest][0]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right][0] < this.heap[smallest][0]) {
            smallest = right;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.bubbleDown(smallest);
        }
    }
}

function totalCost(costs: number[], k: number, candidates: number): number {
    const leftHeap = new MinHeap();
    const rightHeap = new MinHeap();
    let leftPointer = 0;
    let rightPointer = costs.length - 1;
    let ans = 0;

    // Add the initial candidates to the heaps
    for (let i = 0; i < candidates; i++) {
        if (leftPointer <= rightPointer) {
            leftHeap.add([costs[leftPointer], leftPointer]);
            leftPointer++;
        }
        if (leftPointer <= rightPointer) {
            rightHeap.add([costs[rightPointer], rightPointer]);
            rightPointer--;
        }
    }

    // Hire k workers
    while (k > 0) {
        let leftMin = leftHeap.peek();
        let rightMin = rightHeap.peek();

        if (!leftMin && !rightMin) break;

        if (rightMin && (!leftMin || rightMin[0] < leftMin[0])) {
            const worker = rightHeap.delete();
            if (worker) {
                ans += worker[0];
                if (rightPointer >= leftPointer) {
                    rightHeap.add([costs[rightPointer], rightPointer]);
                    rightPointer--;
                }
            }
        } else if (leftMin) {
            const worker = leftHeap.delete();
            if (worker) {
                ans += worker[0];
                if (leftPointer <= rightPointer) {
                    leftHeap.add([costs[leftPointer], leftPointer]);
                    leftPointer++;
                }
            }
        }
        k--;
    }

    return ans;
}
