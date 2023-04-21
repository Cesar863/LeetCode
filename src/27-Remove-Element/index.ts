const arr = [3,2,2,3]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

function removeElement(nums: number[], val: number) {
    for (let i = 0; i < nums.length; i++){
        if (val === nums[i]){
            nums.splice(i ,1) 
            i--;
        }
    }
    console.log(nums);
    return nums
};

removeElement(arr, 3);