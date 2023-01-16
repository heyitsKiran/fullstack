// Class Constructor
// it executes only once,automatically at the time of object creation
// it is a special method 
// we cant invoke constructor explicitly
//  || main purpose is to initialise the object values || 

// class player {
//     constructor() {
//         console.log("Siuuuuuuu")
//     }
// }

// let player1 = new player()
// console.log(player1)

class Player {
    constructor(name, salary, club) {
        this.name = name;
        this.salary = salary;
        this.club = club;

    }
}
let player1 = new Player("Cristiano Ronaldo",1657000000,"Real Madrid")
console.log(player1)

let player2 = new Player("Lionel Messi",987000000,"Barcelona")
console.log(player2)

let player3 = new Player("Neymar Jr",625000000,"PSG")
console.log(player3)
