function findKthLargest(nums: number[], k: number): number {
    class MinHeap {
        size: number;
        heap: number[];

        constructor(size: number, heap?: number[]) {
            this.size = size;
            if (heap){
                this.heap = heap;
            } else{
                this.heap = [];
            }
        }

        bubbleUp(): void{
            let index = this.heap.length -1;

            while(index > 0){
                let parent = Math.floor((index -1)/2);
                if (this.heap[index] < this.heap[parent]){
                    [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
                    index = parent;
                } else{
                    break
                }
            }
        }

        bubbleDown(): void{
            let index = 0;
            let length = this.heap.length;

            while(index < length){
                let smallestVal = index;
                let left = 2 * index + 1;
                let right = 2 * index + 2;

                if (left < length && this.heap[left] < this.heap[smallestVal]){
                    smallestVal = left;
                }
                if (right < length && this.heap[right] < this.heap[smallestVal]){
                    smallestVal = right;
                }

                if (index !== smallestVal){
                    [this.heap[index], this.heap[smallestVal]] = [this.heap[smallestVal], this.heap[index]];
                    index = smallestVal;
                } else{
                    break;
                }
            }
        }

        add(val: number): void{
            if (this.heap.length < this.size){
                this.heap.push(val);
                this.bubbleUp();
            } else if (this.heap[0] < val){
                this.heap[0] = val;
                this.bubbleDown();
                this.bubbleUp();
            }
        }
    }

    const minHeap = new MinHeap(k);

    nums.forEach((x) => {
        minHeap.add(x);
    })

    return minHeap.heap[0];
};