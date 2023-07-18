//Create a HTTP - Server

// const http = require("http");

// let server = http.createServer((req, resp) => {
//   resp.end("Your response is here");
// });

// server.listen(7000, (err) => {
//   if (err) throw err;
//   console.log("Http Server is Running");
// });

//Create using a single line

const http = require("http")
  .createServer((req, resp) => {
    resp.end(`<h1>Hello Voi</h1>`);
  })
  .listen(5000);
