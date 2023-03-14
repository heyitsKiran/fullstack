const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password02 = document.getElementById("password02")

form.addEventListener('submit', e => {
    e.preventDefault();

    inputData();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success")
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ''
    inputControl.classList.add("success")
    inputControl.classList.remove("error")
}

let emailCondition = email => {
    const con = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return con.test(String(email).toLowerCase())
}

const inputData = () => {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const ConpassValue = password02.value.trim()

    //username
    if (usernameValue === '') {
        setError(username, "username cant be empty")
    } else {
        setSuccess(username)
    }

    //Email
    if (emailValue === '') {
        setError(email, 'Email cant be Empty')
    } else if (!emailCondition(emailValue)) {
        setError(email, 'Enter a valid Email Id')
    } else {
        setSuccess(email)
    }

    //Password
    if (passwordValue === '') {
        setError(password,'password cant be Empty')
    } else if (passwordValue.length < 8) {
        setError(password,'password must be atleast of 8 characters')
    } else {
        setSuccess(password)
    }

    //Confirm password
    if (ConpassValue === '') {
        setError(password02, 'it cant be empty')
    } else if (ConpassValue !== passwordValue) {
        setError(password02, 'password not matching')
    } else {
        setSuccess(password02)
    }

}