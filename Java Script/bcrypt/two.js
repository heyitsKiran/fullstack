
const bcrypt = require("bcryptjs")

let player = {
    name: "Sunil Chettri",
    number: 11,
    position: "Winger",
    password: "captainleaderlegend",
    credit_card: "951475368207"
}

let newPassword = bcrypt.hashSync(player.password, 10)
console.log(newPassword)

player = { ...player, password: newPassword }
console.log(player)

if (bcrypt.compareSync("captainleaderlegend", player.password,)) {
    console.log("successful")
} else {
    console.log("Un-Successfull")
}
