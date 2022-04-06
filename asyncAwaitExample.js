
const anAsyncFunction = async () => {
  return "test";
};

const aSimilarAsyncFunction = () => {
  return Promise.resolve("test similar");
};


const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}

const callAsyncFunctions = async () => {
  console.log('before calling first async function');
  const somethingAsync = await doSomethingAsync();
  console.log('response from first async:', somethingAsync);
  const response = await anAsyncFunction();
  console.log("here is the second async function response", response);
  const responseSimilar = await aSimilarAsyncFunction();
  console.log("here is the third async function response", responseSimilar);
};

console.log("program flow starts");

const a = 3
const b = 2
const c = a * b
console.log('c=', c);

callAsyncFunctions();

console.log("program flow continue");
