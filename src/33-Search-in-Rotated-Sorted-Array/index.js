/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//Input: nums = [4,5,6,7,0,1,2], target = 0

const numbers1 = [4,5,6,7,0,1,2]
const target = 0
var search = function(nums, target) {
    const sorted = nums.findIndex((x) => x == target)
    return sorted
};

search(numbers1, target);