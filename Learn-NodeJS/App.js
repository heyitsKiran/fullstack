const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config/config.env" });

app.get("/", (req, resp) => {
  resp.send(`<h1>HEllo World</h1>`);
});

app.listen(process.env.PORT, (err) => {
    console.log(process.env.PORT)
  if (err) throw err;
  console.log("Server is Running on port : 5000");
});

/* How to read Application Configuration env variables

1. install - npm i dotenv
2. create a config folder and a config file 
3. import dotenv 
4. provide congif path - ({path:"./config/config.env"})  

*/