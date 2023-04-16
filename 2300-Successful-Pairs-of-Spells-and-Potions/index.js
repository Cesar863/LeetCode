// const potions1 = [1,2,3,4,5]
// const spells1 = [5,1,3]
// const success1 = 7
// let arr3 = []
// let checkLengthArr = []
// let finalArray = []

// const successfulPairs = (spells, potions, success) => {

//     for(let i = 0; i < spells.length; i++){
//         for(let j = 0; j < potions.length; j++){
//             arr3.push(spells[i] * potions[j])
//             checkLengthArr.push(arr3.slice(potions.length))
//         }
//     }

// }

// successfulPairs(spells1, potions1, success1);
// // console.log(arr3)
// console.log(checkLengthArr);
// // console.log(finalArray);

const sequence = [[4,1],[0,2],[1,3],[2,4],[3,0]]


const isTrue = (sequence) => {
    let flat = sequence.flat()
    for (let j = 0; j< flat.length; j++){
        for(let k = j +1; k < flat.length; k++){
            if(flat[j] !== flat[k]){
                for (let i = 1; i < flat.length; i++){
                    if (flat[i] !== flat[i-1]+1){
                        return true
                    } else {
                        return false
                    } 
                }
            } else {
                return false;
            }
        }
    }
    console.log(flat);
    
}

console.log(isTrue(sequence));