// To find largest number of Three Numbers

let num1 = 518;
let num2 = 729;
let num3 = 4208;

if (num1 > num2 && num1 > num3) {
    console.log('largest number is-', num1);
} else if (num2 > num3 && num2 > num1) {
    console.log('largest number is-', num2);
} else {
    console.log('largest number is -', num3);
}