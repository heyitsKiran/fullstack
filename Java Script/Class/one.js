// it is a ES6 feature
// from class one could create an Object
// it is a draft/plan/template/design to construct an object
// once object is created then a  memory location is allocated

class football {
    club = "Bengaluru FC"
    players = 29
    city = "Bengaluru"
}

let team = new football()
console.log(team)

let team1 = new football()
team1.club = "Kerala Blasters"
team1.city = "Kerala"

console.log(team1)

// class player { }
// let player1 = new player("cristiano", 37, "Al Nassr")
// console.log(player1)