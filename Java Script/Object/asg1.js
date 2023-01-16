// JS Program to count the number of keys/properties in an object - for in loop

let emp = {

    name: "Cristiano Ronaldo",

    company: "Real Madrid",

    salary: 16450000000,

    location: ['portugal', 'spain', 'england', 'italy', 'saudi'],

}

let no_of_props = 0
for (props in emp) {
    ++no_of_props
}

console.log(no_of_props)