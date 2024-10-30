function findKthLargest(nums: number[], k: number): number {
    class MinHeap {
        //add the properties of the class
        //need an array to store the values (in order) inside the heap
        heap: number[];
        //max size of the heap - Used so we can ensure our heap never gets too large
        size: number;

        //now we need a constructor. A constructor is a base case for object. It states the structure of your object
        constructor(size: number, heap?: number[]){
            this.size = size;
            if (!heap){
                this.heap = [];
            } else{
                this.heap = heap;
            }
        }

        //Ensures the heap is maintained when adding values to the heap
        //when an element is added, it ensures that the heap is in order
        bubbleUp(): void{
            //start from the last index of the heap
            let index = this.heap.length -1;
            while (index > 0){
                let parentIndex = Math.floor((index - 1)/2);
                if (this.heap[index] < this.heap[parentIndex]){
                    //didn't know I could do this
                    [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                    //move to a higher location on the tree
                    index = parentIndex;
                } else {
                    //Heap order is satisfied
                    break;
                }
            }
        }

        //Ensures the heap is maintained when removing values from the heap
        //checks if the new root is greater than it's children and if swaps with the smallest child
        bubbleDown(): void{
            let index = 0;
            let length = this.heap.length
            while (index < length){
                const left = 2*index + 1;
                const right = 2*index + 2;
                let smallestIndex = index;

                //if left is smaller than the smallest index we have, left becomes the new smallest index
                if (left < length && this.heap[left] < this.heap[smallestIndex]){
                    smallestIndex = left;
                }

                //if right is smaller than left and is the smallest index we have, right becomes the new smallest index
                if (right < length && this.heap[right] < this.heap[smallestIndex]){
                    smallestIndex = right;
                }

                //if we just changed the smallest index, we need to swap the parent with the children and continue downwards
                if (smallestIndex !== index){
                    [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]]
                    index = smallestIndex; //move down the tree
                } else{
                    break;
                }
            }
        }

        //add values to the heap
        add(value: number):void {
            if (this.heap.length < this.size){
                this.heap.push(value);
                this.bubbleUp();
            } else if (value > this.heap[0]){
                this.heap[0] = value;
                this.bubbleDown();
                this.bubbleUp();
            }
        }
    }

    const minHeap = new MinHeap(k);
    nums.forEach((x) => {
        minHeap.add(x)
    })

    return minHeap.heap[0];
};