//function to find the max val of the give array

function maxi(arr) {

    let max = arr[0]
    for (let i = 1; i <= arr.length - 1; i++) {

        if (arr[i] > max) {
            max = arr[i]

        }
    }
    return max

}

let result = maxi([598, 458, 54, 915, 326, 54, 819])
console.log(result)