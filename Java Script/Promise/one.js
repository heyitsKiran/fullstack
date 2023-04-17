let p = new Promise((resolve, reject) => {
  let a = 6 + 1;
  if (a == 6) {
    resolve("success");
  } else {
    reject("failed");
  }
});

p.then((message) => {
  console.log("this is correct " + message);
}).catch((message) => {
  console.log("this is wrong " + message);
});
