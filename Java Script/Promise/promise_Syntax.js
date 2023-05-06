let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function (value) { /* code if successful */ },
    function (error) { /* code if some error */ }
);


// async function myLaptop() {

//     let myPromise = new Promise(function (myResolve) {
//         setTimeout(function (value) { myResolve("hey voi how are you") }, 3000)
//     })
// }

// console.log(myLaptop())

