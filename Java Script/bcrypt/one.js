
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

let newcc = bcrypt.hashSync(player.credit_card, 10)
console.log(newcc)


player = { ...player, password: newPassword, credit_card: newcc }
console.log(player)

if (bcrypt.compareSync("captainleadelegend", player.password,)) {
    console.log("successful")
} if (bcrypt.compareSync("951475368167", player.credit_card)) {
    console.log("successful")
} else {
    console.log("Un-Successfull")
}
