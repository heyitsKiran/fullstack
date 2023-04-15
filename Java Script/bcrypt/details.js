const bcrypt = require("bcryptjs");

let details = {
  name: "kiran",
  company: "google",
  password: "kiran.789456123",
  bankDetails: "zxcvbnm741852963",
};

let newPassword = bcrypt.hashSync(details.password, 10);
// console.log(newPassword);

details = { ...details, password: newPassword };
// console.log(details);

if (bcrypt.compareSync("kiran.789456123", details.password)) {
  console.log("Successful");
} else {
  console.log("Failed");
}
