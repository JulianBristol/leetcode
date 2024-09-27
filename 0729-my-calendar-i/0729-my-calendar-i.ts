class MyCalendar {
    bookings: any;
    constructor() {
        this.bookings = [];
    }

    book(start: number, end: number): boolean {
        let cal = this.bookings;
        for(const times of cal){
            if (start < times[1] && end > times[0]){
                return false;
            }
        }
        cal.push([start, end])
        return true
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */


