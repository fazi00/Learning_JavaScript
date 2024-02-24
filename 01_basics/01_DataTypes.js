// Two types of data types in JavaSript
// 1. Primitive
// 2. Non-Primitive

// "Primitive Data Types - It is call by value means the original reference can't be be provided to us, copy provided "
let name = "Faizan Azmat"; // string
let age = 24; // number
let isLoggedIn = false; //boolean
let working; //undefined
let a = null; // empty
//symbol => it is used to check the uniqueness in React components
// BigInt => To access large scientific value

//console.log(typeof name);

// CONVERSION OF DATA TYPES
let number01 = "24";
// console.log(typeof number01)
let newNumber01 = Number(number01);
// console.log(newNumber01)
// console.log(typeof newNumber01)

// "Non-Primitive Data Types - Reference data types => direct reference provided to us"
// Array, Object, Function

const products = {
  id: 1,
  productName: "Samsung Note 10",
  color: "black",
  isInStock: true,
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Heap (Non-Primitive Data types) and Stack (Primitive Data Types) Memory in Javascript

// In Heap memory we get a refernece and the original value would be change if we do any changes

let user01 = {
  email: "xyz@gmail.com",
};
const user02 = user01;
//  console.log(user01)
//  console.log(user02)

user02.email = "abc@google.com";
// console.log(user01)
// console.log(user02)

// In Stack memory we get a copy of the original data and the changes we made in the copy
