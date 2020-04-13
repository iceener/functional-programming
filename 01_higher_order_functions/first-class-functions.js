const square = num => num ** 2;
const secondPower = square;

secondPower(2) /*?*/

const logResult = (cb) => {
  console.log(cb(10))
}

logResult(square);
