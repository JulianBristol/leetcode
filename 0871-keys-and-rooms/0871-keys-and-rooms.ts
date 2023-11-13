function canVisitAllRooms(rooms: number[][]): boolean {
    //Create list of visited rooms
    const roomList = new Set();

    //visit rooms
    const visitRoom = (room: number): void  => {
        roomList.add(room)
        rooms[room].forEach((item) => {
            //check rooms that have not been checked
            if (!roomList.has(item)){
                visitRoom(item)
            }
        })
    }

    //check first room
    visitRoom(0)
    
    let ans = true;
    
    //check if all rooms have been visted
    for (let i = 0; i < rooms.length; i++){
        if (!roomList.has(i)){
            ans = false;
            break;
        }
    }
    
    return ans;
};