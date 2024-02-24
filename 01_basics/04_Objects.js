// There are two methods of defining the object
// 1. Literals
// 2. Constructor - Singleton

// Here we discuss Object literals

const user = {
  name: "Faizan",
  "Full Name": "Faizan Azmat",
  age: 24,
  education: "BE in Mechatronics Engineering",
  university: "NUST",
  isGraduated: true,
};

// there are two methods to access the object
// console.log(user.name)
// console.log(user["Full Name"])

// How to print the Symbol value in an Object

const mySymbol = Symbol("key01");

const user01 = {
  [mySymbol]: "key01",
};
// console.log(typeof user01.mySymbol) // Incorrect method
// console.log(user01);

// Freezing the Object - The data is the object will not be changed
Object.freeze(user);

// Greetings in Object

// user.greeting = function () {
//   console.log(`Hello ${this["Full Name"]["Full Name"]}! Hope you are doing great!`);
// };
// console.log(user.greeting());

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Singleton Objects or Constructor
const products = new Object();
const products1 = {};
products1.name = "Sofa";

// console.log(products)
// console.log(products1.name)

const obj1 = { 0: 50, 1: 100, 2: 150 };
const obj2 = { 3: 200, 4: 250, 5: 300 };

// const obj3 = Object.assign({}, obj1 , obj2)
// console.log(obj3)

// The above mentioned task can also be done using Spread Opeartor
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3)

// METHODS OF OBJECTS
console.log(Object.keys(obj1)); // It gives the key of an object
console.log(Object.values(obj1)); // It gives the values of an object
console.log(Object.entries(obj1)); // It gives the keys and values in the form of an Array

// IF WE WANT TO CHECK EITHER THE PROPERTY EXIST IN THE OBJECT OR NOT THEN WE USE
console.log(obj1.hasOwnProperty("3"));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// DESTRUCTING in OBJECTS

const course = {
  name: "Javascript",
  price: 1000,
  instructor: "Hitesh Choudary",
  no_of_videos: 51,
};

const { name, price } = course;
console.log(name);
