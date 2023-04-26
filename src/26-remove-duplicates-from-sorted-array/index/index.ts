function removeDuplicates(nums: number[]): number {
    let k = nums;
    for(let i = 0; i< k.length; i++){
        if(k[i] === k[i+1]){
            k.splice(i,1)
            i--
        }
    }
    return k.length
};