a = [5, 6, 7, 8, 9]
b = [12, 13, 14, 15]

a.push(10)
console.log(a)

console.log(b)

//spread opertaor

let c = [...b]
console.log(c)

//expand

let combine= [...a,...b,...c,75,78,80]
console.log(combine)