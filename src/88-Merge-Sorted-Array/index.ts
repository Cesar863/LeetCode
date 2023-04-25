/**
 Do not return anything, modify nums1 in-place instead.
 */

 const numbs1 = [-1,-1,0,0,0,0]
 const mLet = 4
 const numsb2 = [-1,0]
 const nLet = 2
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.reverse();
    if(m !== 0 || nums1.length !== 0){
        for( let i = 0; i < nums1.length; i++){
            if (nums1[i] === 0){
                nums1.splice(i, 1);
                i = i - 1;
            } else {
                break;
            }
        }
    }
    nums2;
    if(n !== 0 || nums2.length !== 0){
        for(let j = 0; j < nums2.length; j++){
            if (nums2[j] !== 0){
                nums1.push(nums2[j]);
            } else {
                break;
            }
        }
    }
    const targetLength = m+n;
    if(nums1.length !== targetLength){
        const count = targetLength - nums1.length
        const addedZeros = new Array(count).fill(0);
        nums1 = nums1.concat(addedZeros);
    }
    nums1.sort((a , b) => {
        if(a < b){
            return - 1
        }
        if(a > b){
            return 1
        }
        return 0
    })
    console.log(nums1);
 };

 merge(numbs1, mLet, numsb2, nLet);

//  function compareFn(a, b) {
//     if (a is less than b by some ordering criterion) {
//       return -1;
//     }
//     if (a is greater than b by the ordering criterion) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   }