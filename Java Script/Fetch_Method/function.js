

function allData() {
    fetch('https://jsonplaceholder.typicode.com/users', { method: "GET" })
        .then(res => res.json())
        .then(allData => console.log(allData))
        .catch(err => console.log(err))
}
function onlyNames() {
    fetch('https://jsonplaceholder.typicode.com/users', { method: "GET" })
        .then(res => res.json())
        .then(allData => allData.map(data => data.name))
        .then(name => console.log(name))
        .catch(err => console.log(err))
}
