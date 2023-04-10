let state = {
    message: { m1: "GM", m2: "GA", m3: "GN" },
    msg: "Hello",
    product: { p_id: 101, p_Name: "Iphone" }
}

let { msg } = state
console.log(msg)


let { product } = state
let { p_Name } = product

console.log(p_Name)
