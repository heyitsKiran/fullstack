// HTTP is a core module & its not a part of Express

//creating a server

const http = require("http")

let server = http.createServer((req, res) => {
    res.end("Hello Whats up!")
})

server.listen(9000, (err) => {
    if (err) throw err
    console.log("Taadaaaaaa!!!!")
})