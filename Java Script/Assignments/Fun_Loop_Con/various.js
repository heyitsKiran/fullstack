//let arr = [100, 500, 65, 700, 800, 1250, 1750]

// function sum(arr) {

//     let total = 0;
//     for (let num in arr) {
//         total += arr[num]
//     }
//     return total
// }
// console.log(sum(arr))

// function big(arr) {

//     let lg = 0;
//     for (let num in arr) {
//         if (arr[num] > lg) {
//             lg = arr[num]
//         }
//     }
//     return lg
// }
// console.log(big(arr))

// function big(arr) {
//     let total = 0;

//     arr.map((num) => {
//         total += num
//     })
//     return total
// }
// console.log(big(arr))

// function mapBig(arr) {

//     let big = arr[1];
//     arr.map((num) => {
//         if (num < big) {
//             big = num
//         }
//     })
//     return big
// }
// console.log(mapBig(arr))

// function small(arr) {
//     let sml = arr[1];
//     for (let num in arr) {
//         if (arr[num] < sml) {
//             sml = arr[num]
//         }
//     } return sml
// }
// console.log(small(arr))


let abc = [{ name: "kiran", empid: 101, place: "bangalore" }]

// let val = "";
// for (const val of abc) {
//     console.log(val)
// }


for (const val in abc) {
    console.log(abc[val])
}

