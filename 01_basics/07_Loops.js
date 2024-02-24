// +++++++++++++++++ "For Loop" +++++++++++++++++++
// const myArray = ["superman","batman","ironman", "hulk"]
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
//     for (let j = 0; j < 5; j++) {
//         const element = j;
//         console.log(element)

//     }
// }

//

function squareSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const square = array[i] ** 2;
    sum += square;
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
let result = squareSum(numbers);
//console.log(result);

// Some loops are specially designed for Arrays \\
// "HIGHER ORDER ARRAY LOOPS"
// 1. for of Loop

// i) for of loop on Array
const cars = ["Prius", "BMW", "Honda City", "Cultus"];
for (const x of cars) {
  //console.log(x)
}
// ii) for of loop on String
const name = "for of loop in Javascript ";
for (const y of name) {
  //console.log(y)
}

// iii) for of Loop on Map
const map = new Map();
map.set("firstName", "Faizan");
map.set("lastName", "Azmat");

for (const [key, values] of map) {
  //console.log(`Keys: ${key} , Values: ${values}`);
}

// When we use for of loop on Object then it gives error "Object is not Iterable"
// So, for object we use for in loop

//===============================================================================
// 2. for in loop
// i) on Array
const myArray = [1, 2, 3, "cars", "in_2024", 4, 5];
for (const key in myArray) {
  //console.log(`${key}  value of array ${myArray[key]}`)
}

// ii) on Object

const product = {
  name: "Iphone 13 pro max",
  price: "$ 1000",
  color: ["black", "white", "grey"],
  inStock: true,
};

for (const key in product) {
  //console.log(`${key} : ${product[key]}`);
}

//=====================================================================================
// 3. for Each Loop (mostly used for arrays)
// for each loop takes a call back function as parameter. Call back function has no name

// i) on Array
const userName = ["Ali", "Zaid", "Azaam", "Ahmed", "Farooq"];

userName.forEach((element) => {
  //console.log(element);
});

// ii) On function

const number = [20, 45, 32, 78, 99, 100, 56, 89, 96];
function studentMarks(number) {
  if (number < 50) {
    //console.log(number);
  }
}
number.forEach(studentMarks);

// iii) Most used case [{}, {}, {}] -> Array of Objects
const mutation = [
  {
    birdName: "Albino BE",
    gender: "male",
    age: "2 years",
    price: 6000,
  },
  {
    birdName: "Blue fisheri split opline",
    gender: "male",
    age: "1 year",
    price: 15000,
  },
  {
    birdName: "Cremino",
    gender: "female",
    age: "7 months",
    price: 40000,
  },
  {
    birdName: "Common Lutino Pair",
    gender: "pair",
    age: "2 years",
    price: 5000,
  },
];

// using simple function
mutation.forEach(function (item) {
  //console.log(item.birdName)
});

// using arrow function
mutation.forEach((item) => {
  console.log(
    `${item.birdName} ${item.gender} has ${item.age} of age. I will give you in ${item.price}`
  );
});
