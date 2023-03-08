//JSON Web Token => verification takes place initially and then for the further steps the req's carry a token and a secretKey with them.

const jwt = require("jsonwebtoken")

let user = {
    email: "kiran@78abc.com",
    password: "jsonkirantoken@jwt"
}

let payload = {
    id: user.email,
    key: user.password
}

let secretKey = "asdfghjkl"

let token = jwt.sign(payload, secretKey, { expiresIn: 60 * 10 })
console.log(token)

//Verify the Token
jwt.verify(token, secretKey, (err, newPayLoad) => {
    if (err) throw err
    console.log(newPayLoad)
})


