const express = require("express");
const router = express.Router();

//  Name   : localhost:7000/user/
//  Method : GET
router.get("/", (req, res) => {
  res.send(`<h1>User Details</h1>`);
});

// Name: localhost: 7000 / user / login;
// Method: POST;
router.post("/login", (req, res) => {
  let { email, password } = req.body;
  res.send(`<h1>User login</h1>`);
});

//  Name   : localhost:7000/user/registration
//  Method : POST
router.post("/registration", (req, res) => {
  let { name, email, password } = req.body;
  res.send(`<h1>User registration</h1>`);
});

module.exports = router;
