const express = require("express")
const app = express()
// const jwt = require('jsonwebtoken')
// const http = require('http')

let port = 9000

app.get("/", (req, res) => {
    res.send("Welcome to Login Form")
})

app.listen(port, (err, data) => {
    if (err) throw err
    console.log("Server is Running on https://localhost:9000")
})