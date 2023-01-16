// we use constructor to create a new object

class User {
    constructor(email, name) {

        this.email = email;
        this.name = name;
    }
}

var userOne = new User("Royce@prostack.com", "Royce")
var userTwo = new User("Rolex@prostack.com", "Sir")

console.log(userOne);
console.log(userTwo);