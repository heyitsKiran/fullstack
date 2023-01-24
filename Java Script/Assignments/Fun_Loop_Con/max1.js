//function to find the max val of the give array

// function maxi(arr) {

//     let max = arr[0]
//     for (let i = 1; i <= arr.length - 1; i++) {

//         if (arr[i] > max) {
//             max = arr[i]

//         }
//     }
//     return max

// }

// let result = maxi([598, 458, 54, 915, 326, 54, 819])
// console.log(result)


function max(arr) {
    let max_val = arr[0]
    let min_val = arr[0]
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > max_val) {
            max_val = arr[i]
        }
        if (arr[i] < min_val) {
            min_val = arr[i]
        }
        return max_val , min_val
        
    }
}
    let result = max([5, 125, 984, 54, 5698, 5154, 6415, 8684, 3565])
    console.log(result)
    let result1 = min([5, 125, 984, 54, 5698, 5154, 6415, 8684, 3565])
    console.log(result1)