/**
 * @param {string} s
 * @return {number}
 */

const string = 'abcabcbb'

var lengthOfLongestSubstring = (s:string) => {
    let characterIndex: object = {}
    for(let i = 0; i < 256; i++){
        characterIndex[i] = -1;
    }
    let start = 0;
    let end = 0;
    let maxLength = 0;
    while(end < s.length) {
        let char = s.charCodeAt(end);
        if(characterIndex[char] >= start){
            start = characterIndex[char] + 1;
        }
        characterIndex[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
        end++;
    }
    return maxLength;
};

lengthOfLongestSubstring(string);

