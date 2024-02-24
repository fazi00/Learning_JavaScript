// How to make Array in Javascript

const array = [0, 1, 2, 3, 4, 5];

const myArr = new Array(0, 1, 2, 3, "Faizan");

// console.log(myArr)
// console.log(myArr[2])

// Array Methods
// 1. PUSH - add the value at the end of an array
myArr.push("Azmat", 6);
// console.log(myArr)

// 2. POP - remove the value at the end of an array
myArr.pop();
// console.log(myArr)

// 3. UNSHIFT - add the value at the start of an array
myArr.unshift("Hello");
// console.log(myArr)

// 4. SHIFT - remove the value from the start of an array
myArr.shift();
// console.log(myArr)

// 5. Slice - It doesn't manipulate the original array and not add the last value
const newArr01 = myArr.slice(1, 3);
console.log("A ", myArr);
// console.log(newArr01);
// console.log("B ", myArr)

// 6. Splice - It manipulate the original array and add the last value
const newArr02 = myArr.splice(1, 3);
// console.log(newArr02)
// console.log("C ",myArr)

// Converting the array into String
// const newArray = myArr.join()
// console.log(newArray)
// console.log(typeof newArray)

// "How to join two or more Arrays"
const arr01 = [1, 2, 3, 4, 5, 6];
const arr02 = ["Faizan", "Azmat", "Salman", "Awais"];

// 1. Concat Method
const newArr = arr01.concat(arr02);
// console.log(newArr)

// 2. Spread Operator - Glass example (Kanch k glass wali example yaad rahkni hai)

const another_new_Array = [...arr01, ...arr02];
// console.log(another_new_Array);

// If we have more arryas within an array then how we make a single array. Use flat method
const arr = [1, 2, 3, ["faizan", "azmat", 4], 5, 6, [7, 8, [9, 0]]];
// console.log(arr.flat(Infinity));

// SOME MORE CONCEPTS OF ARRAY
// 1. isArray
// 2. from
// 3. of

//console.log(Array.isArray("Faizan")); // checking the given value exist in an array or not
//console.log(Array.from("Faizan")); // making the array
//console.log(Array.from({ name: "Faizan Azmat" })); // Interesting case regarding interviews. To get value of object we should specified the key and values what we want in an array.

let score01 = 100;
let score02 = 200;
let score03 = 300;
let score04 = 400;

//console.log(Array.of(score01, score02, score03));
