const fs = require('fs')

fs.readFile('empData.json', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(JSON.parse(data))

    fs.writeFile('employee.json', data, 'utf-8', (err) => {
        if (err) throw err
        console.log("written successfully")

        // fs.writeFile('edat.json', data, 'utf-8', (err) => {
        //     if (err) throw err
        //     console.log("Cloned Successfully")
        // })
    })
})

