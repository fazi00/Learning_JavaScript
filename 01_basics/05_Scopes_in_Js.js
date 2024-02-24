// Scopes in Javascript
// 1. Global scope (var)
// 2. Block scope  (let, const)

var a = 20;
let b = 10;
const c = 150;

if (true) {
  var a = 200;
  let b = 100;
  const c = 50;

  //   console.log("Inner: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nested Scopes - Child has the permission to access Parents variables but Parents can't access Child variables

function one() {
  const username = "Faizan";

  function two() {
    const learning_Javascript = "Code and Chai";
    //console.log(username)
  }
  //console.log(learning_Javascript) - Output: error
  two();
}
one();

// Take one more example

if (true) {
  const product = "Samsung";
  if (product === "Samsung") {
    const price = "49,999";
    //console.log(`${product}: ${price}`)
  }
  //console.log(price) - Output: error
}
//console.log(product) - Output: error

// ++++++++++++ Mini Hosting in Functions ++++++++++++

// Two methods to declare the functions

// In this function we can access the function before initialization
//console.log(addition(65)) - It is OK and give output
function addition(num) {
  return num + 5;
}
//console.log(addition(65))

// While storing a function in a variables then we can't access before initialization

//console.log(result(50)) - It gives ERROR
const result = function subtraction(num) {
  return num - 10;
};
console.log(result(50));
