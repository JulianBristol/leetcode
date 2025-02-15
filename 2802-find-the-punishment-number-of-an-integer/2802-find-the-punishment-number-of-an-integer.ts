function isPunishmentNumber(num: number): boolean {
    const squaredStr = (num * num).toString();
    
    function canPartition(index: number, sum: number): boolean {
        if (index === squaredStr.length) {
            return sum === num; // Check if sum matches the original number
        }
        
        let currentNum = 0;
        for (let i = index; i < squaredStr.length; i++) {
            currentNum = currentNum * 10 + Number(squaredStr[i]); // Forming contiguous numbers
            if (canPartition(i + 1, sum + currentNum)) {
                return true;
            }
        }
        return false;
    }
    
    return canPartition(0, 0);
}

function punishmentNumber(n: number): number {
    let punishmentSum = 0;

    for (let i = 1; i <= n; i++) {
        if (isPunishmentNumber(i)) {
            punishmentSum += i * i;
        }
    }

    return punishmentSum;
}
