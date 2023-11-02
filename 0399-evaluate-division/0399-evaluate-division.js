/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = {};

    /* populate graph */
    for (let i = 0; i<values.length; i++){
        const [a, b] = equations[i];
        const value = values[i]
        
        if (!(graph[a])){
            graph[a] = {}
        }

        if (!(graph[b])){
            graph[b] = {}
        }
        
        graph[a][b] = value;
        graph[b][a] = 1/value;
    }

    /* tranverse the graph */
    function dfs(current, target, visited){
        /* does not exist */
        if (!graph[current] || !graph[target]){
            return -1.0;
        }
        if (current === target){
            return 1.0;
        }
        /* add our current to visited so we don't redo it */
        visited.add(current)
        /* set result to 0 in case there are no neighbors */
        let result = -1.0

        /* look at the neighbors */
        for( const neighbor in graph[current]){
            if (!visited.has(neighbor)){
                let product = graph[current][neighbor]
                let recursiveRes = dfs(neighbor, target,visited)
                if(recursiveRes !== -1.0){
                    result = product * recursiveRes
                }
            }
        }
        return result;
    }

    /* start the search */
    let results = [];
    for (const [c, d] of queries){
        results.push(dfs(c, d, new Set()))
        
    }
    return results;
    console.log(graph)
};