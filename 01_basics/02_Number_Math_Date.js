const number01 = new Number(500000);
// console.log(number01.toFixed(2));
// console.log(number01.toLocaleString("en-IN"))

const number02 = new Number(999.99);
// console.log(number02.toPrecision(5))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Maths Library

//console.log(Math.round(12.86)) // round the value; Expected output = 13
//console.log(Math.floor(12.9))  // round to the lower value; Expected output: = 12
//console.log(Math.ceil(2.1)) // round the value to the higher value; Expected output = 3
//console.log(Math.random())  // In this case the value is in between 0-1

// Formula while using the Math.random
// If we want the min value should be 10 or according to the requirements then we use the followig formula

const min = 10;
const max = 20;
// Formula
//console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Dates in JavaScript

let myDate = new Date();
//console.log(myDate.toLocaleString());

let myTimeStamps = Date.now();
console.log();
