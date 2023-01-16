const emp = new Object({
    name: "Cristiano Ronaldo",

    company: "Real Madrid",

    salary: 16450000000,

    location: ['portugal', 'spain', 'england', 'italy', 'saudi'],

    greet: function employee_Greet(msg) {
        return msg
    }


})

console.log(emp.name)
console.log(emp.company)
console.log(emp.salary)
console.log(emp.location)
console.log(emp.greet("hey everyone how's the world has been so far"))