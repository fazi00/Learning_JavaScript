// ++++++++++++++++++++++ "Filter Method" ++++++++++++++++++++++
const books = [
  { name: "book01", published: 1990, edition: 2000, genre: "fiction" },
  { name: "book02", published: 1991, edition: 2000, genre: "non-fiction" },
  { name: "book03", published: 1992, edition: 2001, genre: "fiction" },
  { name: "book04", published: 1993, edition: 2002, genre: "non-fiction" },
  { name: "book05", published: 1994, edition: 2000, genre: "non-fiction" },
  { name: "book01", published: 1995, edition: 2003, genre: "science" },
  { name: "book07", published: 1996, edition: 2003, genre: "non-fiction" },
  { name: "book08", published: 1997, edition: 2004, genre: "fiction" },
  { name: "book09", published: 1998, edition: 2004, genre: "science" },
];

let userBooks = books.filter((book) => book.genre === "non-fiction");
userBooks = books.filter((book) => {
  return book.genre === "non-fiction" && book.edition > 2000;
});
//console.log(userBooks)

// ++++++++++++++++++++++ "Map Method" ++++++++++++++++++++++

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nums = myNums.map((num) => (num * 10) / 2);
//console.log(nums)

// ++++++++++++++++++++++ "Chaining" ++++++++++++++++++++++

const number = [1, 2, 3, 4, 5];
let result = number
  .map((num) => num + 10)
  .map((num) => num - 10)
  .filter((num) => num > 2);
//console.log(result);

// ++++++++++++++++++++++ "Reduce Method" ++++++++++++++++++++++
// Mostly used when use shopping cart

// Q. How it works?
// A. const array = [1,2,3,4]
// const initial_Value = 0 // reduce takes initial value
// const result = array.reduce((accumulator, current_Value)=>(accumulator+current_Value, initial_Value))
// Pheli bari main "Accumulator" main "Initial Value jati hai" or us k bd jo in ka
// sum ay ga "accumulator+current_Value" wo accumulator m cala jy ga

// There are two syntax to use reduce

// 1)
// const num = [1,2,3]
// const totalBill = num.reduce(function(acc, curr){
//     console.log(`acc:${acc} and curr:${curr}`)
//     return acc + curr
// },0) // 0 represent initial value of accumulator
//console.log(totalBill)

// 2)
const shoppingCart = [
  { itemName: "Iphone 12", price: 999 },
  { itemName: "Samsung Note 10 lite", price: 999 },
  { itemName: "Poco", price: 499 },
  { itemName: "Realme 7", price: 299 },
];

const billToPay = shoppingCart.reduce((acc, curr) => acc + curr.price, 0);
console.log(billToPay);
