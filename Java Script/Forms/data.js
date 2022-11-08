function validation() {

    let name = document.getElementById('userName').value
    if (name == "") {
        //alert('you forgot something')
        document.getElementById('userMsg').innerHTML = "Please enter Username"
    } else if (name.length <= 7) {
        document.getElementById('userMsg').innerHTML = "Please enter more than 7"

    }
    let passWord = document.getElementById("pass")
    if (passWord == "") {
        document.getElementById("passMsg").innerHTML = "Please enter the password" 
    }


    return false
}