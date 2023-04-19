// this function is taking in 2 things, one being the string, and the other being an optional empty array
// first it will take the string and split it into an array.
// then it will start a foreach loop.
//this loop will check to see if each character is equal to a star.
// if the character is a star then it will pop the last character in the array
// if it is not a star then it will push the character to the array
// finally when it can do neither it will simply join the array
// https://leetcode.com/problems/removing-stars-from-a-string/

const removeStars = ( string, arr = [] ) => 
    string.split``.forEach( character => character == `*` ? arr.pop() : arr.push(character) ) || arr.join``

removeStars('LEET**Cod*e');

console.log(removeStars('LEET**COD*E'))

