let operation = (a, b, xyz) => {

    if (xyz == "sum") {
        return a + b
    }
    if (xyz == "multi") {
        return a * b
    }

}
let r1 = operation(5, 15, "sum")
let r2 = operation(50, 10, "multi")
console.log(r1)
console.log(r2)