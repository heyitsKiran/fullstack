const express = require("express");
let app = express(); // initialising the express app

//Basic Routing
// app.get("/", (req, res) => {
//   res.send(`<h1>Request accomplished</h1>`);
// });

// app.listen(4000, (err) => {
//   if (err) throw err;
//   console.log("Server is running on port : 4000");
// });

//various routing

app.get("/", (req, resp) => {
  resp.send(`<h1>Request Accomplished</h1>`);
});
app.get("/user", (req, resp) => {
  resp.send(`<h1>User Data</h1>`);
});
app.get("/employee", (req, resp) => {
  resp.send(`<h1>Employee</h1>`);
});
app.get("/employee/data", (req, resp) => {
  resp.send(`<h1>Employee Data</h1>`);
});
app.get("/employee/data/id", (req, resp) => {
  resp.send(`<h1>Employee id's</h1>`);
});

app.listen(7000, (err) => {
  if (err) throw err;
  console.log("Server is running on port : 7000");
});
