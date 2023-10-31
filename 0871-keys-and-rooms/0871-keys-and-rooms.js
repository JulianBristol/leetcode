/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = Array(rooms.length)
    
    function visitRoom(room){
        if (!visited[room]){
            visited[room] = true
            rooms[room].forEach((key) => {
                visitRoom(key)
            })
        }
    }
    visitRoom(0)
    return !visited.includes(undefined)
};