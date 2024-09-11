function minBitFlips(start: number, goal: number): number {
  //convert both to binary
  let startBin = start.toString(2);
  let goalBin = goal.toString(2);

  //get number of differences
  goalBin = goalBin.padStart(startBin.length, "0");
  startBin = startBin.padStart(goalBin.length, "0");

  //count differences
  let ans = 0;
  for (let i = 0; i < startBin.length; i++) {
    if (startBin.charAt(i) !== goalBin.charAt(i)) {
      ans++;
    }
  }

  //return answer
  return ans;
}
