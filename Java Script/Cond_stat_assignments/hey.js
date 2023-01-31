//write a js program to check two numbers and return true if one of the number is 100 
//or if the sum of the two numbers is 100

function hey(a, b) {

    return (a == 100 || b == 100 || (a + b) == 100)
}
console.log(hey(20,30))
console.log(hey(50,10))
console.log(hey(100,30))
console.log(hey(20,100))
console.log(hey(100,100))