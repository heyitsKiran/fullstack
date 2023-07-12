  function hey(){
    setTimeout(()=>{
        console.log("gokul")
    },5000)
    setTimeout(()=>{
        console.log("kiran")
    },[3000])
    setTimeout(()=>{
        console.log("joseph")
    },8000)
    setTimeout(()=>{
        console.log("jagadish")
    },6000)
}
console.log(hey())

// async function hey(){
//     console.log('kiran')
//     console.log('jagadish')
//     console.log('gokul')
//     console.log('joseph')
// } 
// hey()