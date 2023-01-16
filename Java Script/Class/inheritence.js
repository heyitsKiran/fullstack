// // Inherit from parent class to child class
// //     basically its like clone between class
// //     inherit all methods and properties
// //         || use the keyword - extends ||

// || super keyword used inside a child class denotes its parent class ||

class central {
    tax = 28;
    apply_Tax() {
        console.log("Applying Tax - Central")
    }
}

class karnataka extends central {
    tax = 75;
}

class goa extends central {
    apply_Tax() {
        console.log("goa party tax")
    }
}

let state1 = new karnataka()
console.log(state1)
state1.apply_Tax()

let state2 = new goa()
console.log(state2)
state2.apply_Tax()

