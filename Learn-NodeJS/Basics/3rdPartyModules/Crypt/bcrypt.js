const bcrypt = require("bcryptjs");

let details = {
  name: "Cristiano Ronaldo",
  username: "cr7@gmail.com",
  password: "cr7thegoat",
  mobile: "7894561230",
};

let newPassword = bcrypt.hashSync(details.password, 10);

details = { ...details, password: newPassword };
console.log(details);

if (bcrypt.compareSync("cr10thegoat", details.password)) {
  console.log("Matched perfectly");
} else {
  console.log("stfu and get lost");
}

//hashsync a number - number as string is possible
// let newMobile = bcrypt.hashSync(details.mobile, 10);

// details = { ...details, mobile: newMobile };
// console.log(details);
