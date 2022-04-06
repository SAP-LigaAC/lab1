const fs = require('fs')

console.log("program flow starts");

fs.readFile('files.json', (err, data) => {
  if (err) {
    //handle error
    console.log('an error was received reading file',err.message);
    return
  }

  //no errors, process data
  console.log('file read, in callback function display the content:')
  console.log(data.toString())
})

console.log("program flow continue");
const a = 3
const b = 2
const c = a * b
console.log('calculated value =', c);

setTimeout(() => {
  console.log('runs after 5 seconds')
}, 5000)

console.log('runs now');
