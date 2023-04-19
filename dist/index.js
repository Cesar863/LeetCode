// /**
//  * @param {string} s
//  * @return {number}
//  */
// const string = 'abcabcbb'
// var lengthOfLongestSubstring = (s:string) => {
//     let characterIndex: object = {}
//     for(let i = 0; i < 256; i++){
//         characterIndex[i] = -1;
//     }
//     let start = 0;
//     let end = 0;
//     let maxLength = 0;
//     while(end < s.length) {
//         let char = s.charCodeAt(end);
//         if(characterIndex[char] >= start){
//             start = characterIndex[char] + 1;
//         }
//         characterIndex[char] = end;
//         maxLength = Math.max(maxLength, end - start + 1);
//         end++;
//     }
//     return maxLength;
// };
// // lengthOfLongestSubstring(string);
// function intToRoman(num: number): string {
//     // define the hash table that maps the roman numbers to the values
//     const romans = {
//         M:1000,
//         CM:900,
//         D:500,
//         CD:400,
//         C:100,
//         XC:90,
//         L:50,
//         XL:40,
//         X:10,
//         IX:9,
//         V:5,
//         IV:4,
//         I:1,
//     }
//     // an empty string that stores the roman numeral character
//     let results = '';
//     // loops through each key in the hash table
//     for(let key in romans){
//         // while the number is equal or greater than the current value of the roman numeral
//         while(num >= romans[key]){
//             // add the current roman numeral to the result string
//             results += key;
//             // subtract the integer value from the roman numeral key
//             num -= romans[key];
//         }
//     }
//     console.log(results);
//     return results
// };
// intToRoman(153)
// function integerToRoman(num) {
//     // Define an array that contains the Roman numeral characters and their corresponding integer values
//     const romanNumerals:any = [
//       ["M", 1000],
//       ["CM", 900],
//       ["D", 500],
//       ["CD", 400],
//       ["C", 100],
//       ["XC", 90],
//       ["L", 50],
//       ["XL", 40],
//       ["X", 10],
//       ["IX", 9],
//       ["V", 5],
//       ["IV", 4],
//       ["I", 1]
//     ];
//     // Initialize an empty string to store the Roman numeral equivalent of the input integer
//     let result = "";
//     // Loop through each element in the romanNumerals array
//     for (let i = 0; i < romanNumerals.length; i++) {
//       // While the input integer is greater than or equal to the integer value of the current Roman numeral
//       while (num >= romanNumerals[i][1]) {
//         // Add the current Roman numeral to the result string
//         result += romanNumerals[i][0];
//         // Subtract the integer value of the current Roman numeral from the input integer
//         num -= romanNumerals[i][1];
//       }
//     }
//     // Return the result string, which contains the Roman numeral equivalent of the input integer
//     return result;
//   }
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
    console.log(sum);
    return sum;
}
;
sumBase(68, 2);
//# sourceMappingURL=index.js.map