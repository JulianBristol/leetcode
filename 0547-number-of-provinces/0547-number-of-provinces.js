/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function findCircleNum(isConnected) {
    let ans = 0;
    const visited = new Set()

    for(let city = 0; city < isConnected.length; city++){
        if (!visited.has(city)){
            dfs(city)
            ans++
        }
    }
    return ans;

    
    function dfs(city){
            
            for(let i=0; i<isConnected.length; i++){
                if (isConnected[city][i] === 1 && !visited.has(i)){
                    visited.add(i)
                    dfs(i)
                }
            }
    }
};