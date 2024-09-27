class MyCalendar {
    bookings: [number, number][];
    constructor() {
        this.bookings = [];
    }

    book(start: number, end: number): boolean {
        for(const [bStart, bEnd] of this.bookings){
            if (start < bEnd && end > bStart){
                return false;
            }
        }
        this.bookings.push([start, end])
        return true
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */


