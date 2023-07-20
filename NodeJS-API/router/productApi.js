const express = require("express");
const router = express.Router();

/* Name   : localhost:7000/product/login 
   Method : GET
*/
router.get("/", (req, res) => {
  res.send(`<h1>Product Details</h1>`);
});

/* Name   : localhost:7000/product/login 
   Method : POST
*/
router.get("/login", (req, res) => {
  res.send(`<h1>Product login</h1>`);
});

/* Name   : localhost:7000/product/login 
   Method : POST
*/
router.get("/registration", (req, res) => {
  res.send(`<h1>Product registration</h1>`);
});

module.exports = router;
