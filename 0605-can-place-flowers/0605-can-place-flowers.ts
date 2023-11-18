function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; i++) {
    if (n < 1) break;
    if (flowerbed[i - 1] || flowerbed[i] || flowerbed[i + 1]) continue;
    flowerbed[i] = 1;
    n--;
  }
  return n === 0;
}