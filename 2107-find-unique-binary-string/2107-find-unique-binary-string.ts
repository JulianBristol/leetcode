function findDifferentBinaryString(nums: string[]): string {
    let result = "";

    for (let i = 0; i < nums.length; i++) {
        result += nums[i][i] === '0' ? '1' : '0';
    }

    return result;
}
