function queryResults(limit: number, queries: number[][]): number[] {
  //create 2 maps
  const map1 = new Map<number, number>();
  const map2 = new Map<number, number>();
  let ans = [];

  for(let [ball, color] of queries){
    //change ball color
    if (map1.has(ball)){
        const prevColor = map1.get(ball);
        //delete 1 instance of ball color from map2
        if (map2.get(prevColor) === 1){
            map2.delete(prevColor);
        } else{
            map2.set(prevColor, map2.get(prevColor) -1)
        }
    }
    map1.set(ball, color);
    map2.set(color, map2.get(color) + 1 || 1)
    ans.push(map2.size)
  }

  return ans;
};