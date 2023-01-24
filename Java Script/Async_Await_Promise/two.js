// let add = (a, b) => {
//     return a + b
// }
// let multi = (a, b) => {
//     return a * b
// }

// let cal = (a, b, callback) => {
//     return callback(a, b)
// }

// let r1 = add(10, 20)
// let r2 = multi(10, 20)
// let r3 = cal(10, 20, (a, b) => { return a - b })

// console.log(r1)
// console.log(r2)
// console.log(r3)

let employees = [{ id: 101, name: "Rahul", sal: 45000 }, { id: 102, name: "Sonia", sal: 55000 }]


let createEmployee = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp)
        callback() 
    }, [4000])
}

let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + `<tr>
                                <td>${emp.id}</td>
                                <td>${emp.name}</td>
                                <td>${emp.sal}</td>
                            <tr>`
        }
        document.getElementById('abc').innerHTML = rows
    }, [1000])
}
createEmployee({ id: 103, name: "Priyanka", sal: 650000 }, getEmployees)
