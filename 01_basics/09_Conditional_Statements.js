// const temperature = 35;
// if (temperature > 30) {
//   console.log("The temperature is bearable and pleasant");
// } else {
//   console.log("The temperatre is hot");
// }

// If we not write break in case then after the key match the rest cases don't check and execute the remaining code except default.
const month = "January";
switch (month) {
  case "January":
    console.log("January");
    break;
  case "Febuary":
    console.log("Febuary");
    break;
  case "March":
    console.log("March");
    break;
  case "April":
    console.log("Aril");
    break;

  default:
    break;
}

// ++++++++++++ Truthy & Falsy Values ++++++++++++++
// falsy: false, 0, -0, NaN, null, undefined, BigInt 0n, ""
// truthy: "0", 'false', " ", [], {}, function(){}

// Checking the array either it is empty or not
const userEmail = [];

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const product = {};

if (Object.keys(product).length === 0) {
  console.log("Object is empty");
}

// ++++++++++ Nullisg Coalescing Opeartor "??" ++++++++++++++ (When we don'twant null or undefined)
let val = null ?? "Zaid";
console.log(val);
