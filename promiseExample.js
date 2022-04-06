const fs = require("fs");

console.log("program flow starts");

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        console.log("in promise throwing an error:", err);
        reject(err); // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return; // and we don't want to go any further
      }
      console.log("in promise before resolving it");
      resolve(data);
    });
  });
};

console.log("program flow continue");
const a = 3
const b = 2
const c = a * b
console.log('calculated value =', c);

setTimeout(() => {
  console.log('runs after 5 seconds')
}, 5000)


console.log("before calling file read promise");
getFile("file.json")
  .then((data) => {
    console.log("promise has been resolved");
    console.log(data.toString());
  })
  .catch((err) => {
    console.log("promise has been rejected");
    console.error(err);
  });

console.log('flow continue');
