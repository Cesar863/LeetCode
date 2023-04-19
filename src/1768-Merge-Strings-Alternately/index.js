/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

const string1 = 'abcde'
const string2 = 'def'

var mergeAlternately = function (word1, word2) {
    let merged = '';
    let countI = 0;
    let countJ = 0;

    while (countI < word1.length && countJ < word2.length) {
        merged += word1[countI] + word2[countJ]
        countI++
        countJ++
    }
    if (countI < word1.length) {
        merged += word1.substring(countI);
    }

    if (countJ < word2.length) {
        merged += word2.substring(countJ);
    }

    console.log(merged);
    return merged;
};

mergeAlternately(string1, string2)