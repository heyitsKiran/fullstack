const bcrypt = require('bcrypt') // ES5 feature
let user = {
    name: "cristiano",
    email: "ronaldo@gmail.com",
    pincode: '56200',
    password: 'cr@123s'
}
let newPassword = bcrypt.hashSync(user.password,10)
console.log(newPassword);

user = { ...user, password: newPassword };
console.log(user);

if (bcrypt.compareSync('psa123', user.password)) {
    console.log('password-matched');}
    else{
    console.log('password not match');
    }