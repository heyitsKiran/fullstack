const jwt = require("jsonwebtoken");

let user = {
  email: "user123@gmail.com",
  password: "qwertyuiop123",
};

let token = jwt.sign(user, "asdfghjkl", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//destructure-

// let payload = {
//   id: user.email,
//   pwd: user.password,
// };

// let secretKey = "asghjkl";

// let token = jwt.sign(payload, secretKey, { expiresIn: 60 * 10 });
// console.log(token);

//How to verify the token-

// jwt.verify(token, secretKey, (err, newPayload) => {
//   if (err) throw err;
//   console.log(newPayload);
// });
