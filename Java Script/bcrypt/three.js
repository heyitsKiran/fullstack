class bfc {
    club = "bengaluru fc"
    players = 29
    captain = "SC11"
    password = "Wearebfc"
    points = +1439
}

let jsw_Bfc = new bfc()
console.log(jsw_Bfc)

const bcrypt = require("bcryptjs")

let newPassword = bcrypt.hashSync(jsw_Bfc.password, 10)
console.log(newPassword)

let bBfc = { ...jsw_Bfc, password: newPassword }

if (bcrypt.compareSync("WeArebfc", bBfc.password)) {
    console.log("Success")
} else {
    console.log("Un-Success")
}