// 1> map(() => { }) - iterates the array and executes the function
// 2> callback - it is a function passed as a argument || (() => { }) ||
//             -it is a technique that allows a function to call another function.
//             -callback function can run after another function has finished.

let arr = [12, 14, 16, 18, 20]
let new_arr = arr.map((arr_num) => {
    return arr_num + 1
})

console.log(arr)
console.log(new_arr)