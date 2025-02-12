function maximumSum(nums: number[]): number {
    const map = new Map<number, number>();
    let ans = -1;

    //Much more efficient way to sum up digits
    function digitSum(n: number): number {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    }

    for(const num of nums){
        const sum = digitSum(num)

        if (map.has(sum)){
            ans = Math.max(ans, map.get(sum)+ num);
        }
        map.set(sum, Math.max(map.get(sum) || 0, num))
    }

    return ans;
};