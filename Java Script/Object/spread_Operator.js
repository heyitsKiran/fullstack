let player = {

    name: "Cristiano Ronaldo",

    company: "Real Madrid",

    salary: 16450000000,

    location: ['portugal', 'spain', 'england', 'italy', 'saudi'],

}
console.log(player)

let new_Player = {...player} 
console.log(player)

new_Player.name = "Lionel Messi"
console.log(new_Player)