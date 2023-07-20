const express = require("express");
let app = express();

/* API URL : localhost:2000/signup
Method : POST
Fields : Email,Password
Access Type : Public */

app.post("/signup", (req, res) => {
  res.send(`<h1>User Registered Successfully</h1>`);
});

/* API URL : localhost:2000/signup
Method : GET
Fields : Email,Password
Access Type : Public */

app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.listen(2000, (err) => {
  if (err) throw err;
  console.log("Server is running on port : 2000");
});
