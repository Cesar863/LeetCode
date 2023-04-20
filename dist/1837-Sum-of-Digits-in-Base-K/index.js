// Input: n = 34, k = 6
// Output: 9
// Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.
const sumBase = (n, k) => {
    let sum = 0;
    const result = [];
    while (n > 0) {
        const remainder = Math.floor(n / k);
        sum += n % k;
        if (remainder < k) {
            sum += remainder;
            break;
        }
        n = remainder;
    }
    console.log(sum);
    return sum;
};
sumBase(68, 2);
//# sourceMappingURL=index.js.map