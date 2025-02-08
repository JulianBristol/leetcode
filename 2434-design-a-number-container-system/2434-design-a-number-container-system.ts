class NumberContainers {
    private i2n: Map<number, number>;  // Maps index -> number
    private n2i: Map<number, number[]>; // Maps number -> sorted list of indices

    constructor() {
        this.i2n = new Map();
        this.n2i = new Map();
    }

    change(index: number, number: number): void {
        // If index already has a number, remove it from the old list
        if (this.i2n.has(index)) {
            const oldNumber = this.i2n.get(index);
            if (this.n2i.has(oldNumber)) {
                this.removeSorted(this.n2i.get(oldNumber), index);
            }
        }

        // Update i2n
        this.i2n.set(index, number);

        // Add to sorted list in n2i
        if (!this.n2i.has(number)) {
            this.n2i.set(number, []);
        }
        this.insertSorted(this.n2i.get(number), index);
    }

    find(number: number): number {
        return this.n2i.has(number) && this.n2i.get(number).length > 0 
            ? this.n2i.get(number)[0] 
            : -1;
    }

    private insertSorted(arr: number[], index: number): void {
        let left = 0, right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < index) left = mid + 1;
            else right = mid;
        }
        arr.splice(left, 0, index); // Insert index at the right place
    }

    private removeSorted(arr: number[], index: number): void {
        let pos = arr.indexOf(index);
        if (pos !== -1) arr.splice(pos, 1);
    }
}
