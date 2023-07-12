// function sayHello(){
//     return "Hello World"
// }
// let fn = sayHello
// console.log(fn())
// console.log(sayHello())

// function sayHello() {
//   return function () {
//     return "Hello World";
//   };
// }
// let fn = sayHello();
// let message = fn();

// console.log(fn());
// console.log(sayHello());
// console.log(message);

// const arr = ["kiran", "gokul", "sujith", "kaushik", 45, 52, 958, "kiran"];
// const one = ["abcdefghijklmnopqrstuvwxyz"];

// const obj = {
//   kiran: 17,
//   gokul: 18,
//   sujith: 19,
//   kaushik: 20,
// };

// for (name of arr.reve,rse()) {
// }
// // console.log(one.split("").reverse().join(""));

// function reverse(two) {
//   console.log(two.split("").reverse().join(""));
// }
// reverse("abcdefghijklmnopqrstuvwxyz");

// arr.pop();
// console.log(arr);

// arr[2] = arr.push("haris");
// console.log(arr);

// function high(arr) {
//   let max = arr[0];
//   for (num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }
// let result = high([55, 85, 96, 21, 74, 56, 91, 3, 84, 95, 2]);
// console.log(result);

function add(arr) {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum;
}
let result = add([55, 85, 96, 21, 74, 56, 91, 3, 84, 95, 2]);
console.log(result);
