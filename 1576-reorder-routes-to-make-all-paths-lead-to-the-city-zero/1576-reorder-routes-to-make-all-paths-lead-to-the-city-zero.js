/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let to = new Map()
    let from = new Map()

    /* generate array items */
    function insert(map, a, b) {
        if (map.has(a)){
            let array = map.get(a)
            array.push(b)
            map.set(a, array)
        }else{
            map.set(a, [b])
        }
    }

    /* set items into the mappings */
    for (const [a,b] of connections){
        insert(to, b, a)
        insert(from, a, b)
    }

    /* check the items in the map */
    const queue = [0]
    const visited = new Set()
    let ans = 0;

    while(queue.length){
        const current = queue.shift();

        if (from.has(current)){
            for (const x of from.get(current)){
                if (visited.has(x)) continue;
                queue.push(x);
                ans++
            }
        }

        if (to.has(current)){
            for (const x of to.get(current)){
                if (visited.has(x)) continue
                queue.push(x)
            }
        }
        visited.add(current)
    }
    return ans
};