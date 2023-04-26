/**
 Do not return anything, modify nums in-place instead.
 */

//  Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

const numbers = [1,2,3,4,5,6,7]
const shift = 3

function rotate(nums: number[], k: number): void {
    let count = 0;
    nums.reverse()
    for (let i = 0; i < nums.length; i++){
        if (count !== k){
            nums.push(nums[i]);
            nums.splice(i, 1);
            count++
            i--
        } else {
            break;
        }
    }
    nums.reverse()
    console.log(nums);
};

rotate(numbers, shift);