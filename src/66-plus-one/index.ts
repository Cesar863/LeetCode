// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

const plusOneArr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]


function plusOne(digits: number[]): number[] {
    const joined = digits.join('');
    console.log(joined);
    const sum = parseInt(joined) + 1;
    console.log(sum);
    
    const split = sum.toString().split('').map(Number);
    console.log(split);
    return split
};

plusOne(plusOneArr);