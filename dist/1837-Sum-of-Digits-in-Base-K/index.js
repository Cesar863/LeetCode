// Input: n = 34, k = 6
// Output: 9
// Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.
// const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
// console.log(sum); // 6
function sumBase(n, k) {
    let numberArr = [];
    const sub = n / k;
    const rounded = Math.floor(sub);
    numberArr = Array.from(String(rounded), Number);
    const base = n % k;
    numberArr.push(base);
    const sum = numberArr.reduce((partialSum, a) => partialSum + a, 0);
    console.log('==================');
    console.log(sum);
    return sum;
}
;
sumBase(68, 2);
//# sourceMappingURL=index.js.map