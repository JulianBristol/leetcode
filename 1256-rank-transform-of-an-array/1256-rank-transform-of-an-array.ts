function arrayRankTransform(arr: number[]): number[] {
    const map = new Map();
    let sortedArr = [...arr]
    sortedArr = sortedArr.sort(function(a, b) {
  return a - b;
});
    let counter = 1;
    sortedArr.map((x) => {
        if (!map.has(x)){
            map.set(x, counter++);
        }
    })
    let ans = []
    arr.map((x) => {
        console.log(x, map.get(x))
        ans.push(map.get(x))
    })
    return ans;
};