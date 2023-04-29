// Input: nums = [3,2,3]
// Output: 3
const numbsArr = [3, 2, 3];
function majorityElement(nums) {
    let count = 0;
    let majority = null;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
        }
        if (nums[i] === majority) {
            count++;
        }
        else {
            count--;
        }
    }
    return majority;
}
;
majorityElement(numbsArr);
//# sourceMappingURL=index.js.map