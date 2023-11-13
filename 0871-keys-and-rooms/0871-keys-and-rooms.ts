function canVisitAllRooms(rooms: number[][]): boolean {
    //Create list of visited rooms
    const roomList = new Set();
    //create counter to know how many rooms has been visted
    let visits = 0;

    //visit rooms
    const visitRoom = (room: number): void  => {
        roomList.add(room)
        visits += 1;
        rooms[room].forEach((item) => {
            //check rooms that have not been checked
            if (!roomList.has(item)){
                visitRoom(item)
            }
        })
    }

    //check first room
    visitRoom(0)

    //get ans
    return visits === rooms.length
};