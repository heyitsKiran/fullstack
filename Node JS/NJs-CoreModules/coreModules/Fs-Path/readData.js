const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'Football', 'ISL', 'data.json'), 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)

    fs.writeFile(path.join(__dirname, 'Football', 'ISL', 'dataEmp.json'), data, 'utf-8', (err) => {
        if (err) throw err
        console.log("Done Successfully")
    })
}) 

