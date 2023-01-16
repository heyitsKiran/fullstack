const personalDetails = {
    name: "Kiran",
    age: 18,
    email: "www.kiran.com"
}
const loginlDetails = {
    username: "cr",
    height: 5.9,
    email: "www.cristiano.com"
}
const user = {
...personalDetails,
...loginlDetails
}
console.log(user)