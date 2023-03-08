let express = require('express')
let app = express()
let port = 7000
let hostname = "127.0.0.1"

//REST API
app.get('/', (req, res) => {
    res.send("whats up guys")
})

app.get("/users", (req, res) => {

    res.send(

        //Data
        users = [
            {
                "id": 1,
                "first_name": "Renaldo",
                "last_name": "Barnsley",
                "email": "rbarnsley0@dedecms.com",
                "gender": "Male"
            }, {
                "id": 2,
                "first_name": "Arden",
                "last_name": "Bangley",
                "email": "abangley1@wsj.com",
                "gender": "Female"
            }, {
                "id": 3,
                "first_name": "Elizabet",
                "last_name": "Goodbar",
                "email": "egoodbar2@bloomberg.com",
                "gender": "Female"
            }, {
                "id": 4,
                "first_name": "Coralyn",
                "last_name": "Gorgen",
                "email": "cgorgen3@bizjournals.com",
                "gender": "Female"
            }]
    )
})

//SERVER
app.listen(port, hostname, (err) => {
    if (err) throw err
    console.log(`Server is running on http://localhost:${hostname}:${port}`)
})