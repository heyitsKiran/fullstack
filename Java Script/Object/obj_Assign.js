// to Clone/copy JS Object  - object.assign() , spread Operator 

let player = {

    name: "Cristiano Ronaldo",

    company: "Real Madrid",

    salary: 16450000000,

    location: ['portugal', 'spain', 'england', 'italy', 'saudi'],

}

const new_Player = (Object.assign({}, player))
console.log(player)
console.log(new_Player)

new_Player.name = "Messi"
console.log(player)
console.log(new_Player)







