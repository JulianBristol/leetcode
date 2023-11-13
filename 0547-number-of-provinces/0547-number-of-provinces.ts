function findCircleNum(isConnected: number[][]): number {
    const visited = new Set();
    let counter = 0;

    const visitCity = (city: number):void => {
        visited.add(city);
        for (let i = 0; i < isConnected.length; i++){
            if (isConnected[city][i] && !visited.has(i)){
                visitCity(i);
            }
        }
    }

    for (let i = 0; i < isConnected.length; i++){
        if (!visited.has(i)){
            visitCity(i);
            counter++;
        }
    }

    return counter;
};