//function to find the max val of the give array

// function max_Value(array) {

//     var max = array[0]
//     for (let i = 1; i <= array.length - 1; i++) {

//         if (array[i] > max) {
//             max = array[i]
//         }
//     }
//     return max
// }
//  let result = max_Value([25, 85, 94, 75, 19, 121, 46])
//  console.log(result)




// function maxValue(arr) {

//     let max = arr[0]
//     for (let i = 1; i <= arr.length - 1; i++) {
//         //const element = arr[i];
//         if (arr[i] > max) {
//             max = arr[i]
//         }

//     }
//     return max

// }
// let result = maxValue([54, 98, 78, 45, 12, 49])
// console.log(result)

function max_val(arr) {
    let max = arr[0]
    for (let i = 1; i <= arr.length - 1; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}
let result = max_val([15, 45, 75, 85, 94, 61, 21, 26, 98])
console.log(result)