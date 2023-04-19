const set1 = [-1,0,3,5,9,12];
const target1 = 9
const target2 = -1

// the following solution will take in 2 parameters a number array and a target number
// looking at the nums array it will locate and return the index of  what ever the target is
// if it cannot find the target then it will return -1 as it is false and not in the array
// this is simple array manipulation

const search = (nums, target) => {
    return nums.indexOf(target)
}

console.log(search(set1, target2))