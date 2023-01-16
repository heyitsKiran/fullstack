//Create a JS Object using Object Literal

// const emp={
//     name : "Cristiano Ronaldo",

//     company : "Real Madrid",

//     salary : 16450000000,

//     location: ['portugal','spain','england','italy','saudi'],

//     greet : function employee_Greet() {
//         console.log(("Hey Everyone how you all are doing")) 
//     }

// }

// console.log(emp.name)
// console.log(emp.company)
// console.log(emp.salary)
// console.log(emp.location)
//  emp.greet()

const emp = {
    name: "Cristiano Ronaldo",

    company: "Real Madrid",

    salary: 16450000000,

    location: ['portugal', 'spain', 'england', 'italy', 'saudi'],

    greet: function employee_Greet(msg) {
        return msg
    }


}

console.log(emp.name)
console.log(emp.company)
console.log(emp.salary)
console.log(emp.location)
console.log(emp.greet("hey everyone how's the world has been so far")) 