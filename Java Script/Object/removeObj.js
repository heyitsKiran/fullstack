const emp = {
    name: "Cristiano Ronaldo",

    company: "Real Madrid",

    salary: 16450000000,

    location: ['portugal', 'spain', 'england', 'italy', 'saudi'],

    greet: function employee_Greet(msg) {
        return msg
    }


}


console.log(emp.greet("hey everyone how's the world has been so far")) 
delete emp.name;
delete emp.location;
console.log(emp)