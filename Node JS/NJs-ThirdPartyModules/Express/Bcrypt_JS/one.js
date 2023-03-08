const bcrypt = require('bcryptjs')

let user = {
    name: 'kiran kumar',
    email: 'kiran76@gmail.com',
    password: "asdfghjkl2963."
}

let newPassword = bcrypt.hashSync(user.password, 10)
// console.log(newPassword)

let new_user = { ...user, password: newPassword }
// console.log(new_user)

function verify() {
    if (bcrypt.compareSync("asdfghjkl2963.", newPassword)) {
        console.log("successful login")
    } else {
        console.log("sorry you are not allowed")
    }
}
verify()