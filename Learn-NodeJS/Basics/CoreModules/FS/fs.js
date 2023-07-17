//File System
const fs = require("fs");

//read file synchronously
// const data = fs.readFileSync("sample.txt", "utf-8", (newData, err) => {
//   console.log(newData);
// });
// console.log(data);

//read file Asynchronously
fs.readFile("sample.txt", "utf-8", (err, Data) => {
  fs.writeFile("samp2.txt", Data, (err) => {
    if (err) throw err;
    console.log("Writing A File is Successful");
  });
});
