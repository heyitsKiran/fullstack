const express = require("express");
const app = express();

// Name   : localhost:7000/
//   Method : GET
app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

//Routing API
app.use("/user", require("./router/userApi"));
app.use("/product", require("./router/productApi"));

//Server
app.listen(7000, (err) => {
  if (err) throw err;
  console.log(`Server is running on Port : ${7000}`);
});
