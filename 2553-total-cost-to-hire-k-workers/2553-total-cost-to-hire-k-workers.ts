class MinHeap {
  private heap: number[] = [];

  constructor() {}

  peek(): number {
    return this.heap[0];
  }

  add(num: number): void {
    this.heap.push(num);
    this.bubbleUp(this.heap.length - 1);
  }

  delete(): number | undefined {
    if (this.heap.length === 0) return undefined;
    const pop = this.heap[0];
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return pop;
  }

  bubbleUp(currentIndex: number = this.heap.length - 1): void {
    let parent = Math.floor((currentIndex - 1) / 2);

    while (currentIndex > 0) {
      if (this.heap[currentIndex] < this.heap[parent]) {
        this.swap(currentIndex, parent);
        currentIndex = parent;
        parent = Math.floor((currentIndex - 1) / 2);
      } else break;
    }
  }

  bubbleDown(currentIndex: number = 0): void {
    let smallest = currentIndex;
    let left = 2 * currentIndex + 1;
    let right = 2 * currentIndex + 2;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== currentIndex) {
      this.swap(smallest, currentIndex);
      this.bubbleDown(smallest);
    }
  }

  swap(idx1: number, idx2: number): void {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
}

function totalCost(costs: number[], k: number, candidates: number): number {
  //create heaps
  const left = new MinHeap();
  const right = new MinHeap();
  let leftPointer = 0;
  let rightPointer = costs.length - 1;
  let ans = 0;

  //allocate workers to heaps
  for (let i = 0; i < candidates; i++) {
    if (leftPointer <= rightPointer) {
      left.add(costs[leftPointer]);
      leftPointer++;
    }

    if (leftPointer <= rightPointer) {
      right.add(costs[rightPointer]);
      rightPointer--;
    }
  }

  //hire k workers
  while (k > 0) {
    let rightMin = right.peek();
    let leftMin = left.peek();

    if (!rightMin && !leftMin) break;

    if (rightMin && (!leftMin || rightMin < leftMin)) {
      const worker = right.delete();
      if (worker) {
        ans += worker;

        if (leftPointer <= rightPointer) {
          right.add(costs[rightPointer]);
          rightPointer--;
        }
      }
    } else if (leftMin) {
      const worker = left.delete();

      if (worker) {
        ans += worker;

        if (leftPointer <= rightPointer) {
          left.add(costs[leftPointer]);
          leftPointer++;
        }
      }
    }
    k--;
  }

  return ans;
}
