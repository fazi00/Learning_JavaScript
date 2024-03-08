// ++++++++++++++++++++++++++++++ NOTES ++++++++++++++++++++++++++++++

// Promises execute in future. "Promises is an JS OBJECT which represents the eventual completion or failure
// of async operations"
// It has three states: 1) pending 2) fullfiled 3) rejected
// .then() is connected with resolve. .then() takes call back function
// There are 6 promise API (promise.all, promise.allSettled, promise.any, promise.resolve/reject)
// The word “async” before a function means one simple thing: a function always returns a promise. -
// - Other values are wrapped in a resolved promise automatically.
// The keyword await makes JavaScript wait until that promise settles and returns its result.

// Q. How to create Promise?
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task like DB calls, networking calls, cryptograpghy
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 500);
});

// // Here is the consumption of promise
promiseOne.then(function () {
  console.log("Promise consumed");
});

// // Alternate method to use promise i.e., Promise two
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 500);
}).then(function () {
  console.log("Task 2 resolved");
});

// // Promise three
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Data extration");
    resolve({ username: "Faizan", email: "faizan@example.com" });
  }, 500);
});

promiseThree.then(function (user) {
  console.log(user);
});

// // Promise four

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "James", email: "james.net@example.com" });
    } else {
      reject("Something went wrong");
    }
  }, 500);
});

// // Chaining, Jo value first .then() sy return ho ge wo next .then() m pass ho ge
promiseFour
  .then(function (user) {
    console.log(user);
    return user.email;
  })
  .then(function (email) {
    console.log(email);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally("The promise is rejected or resolved");

// // Promise Five
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ coursename: "Core Javascript", price: 999 });
    } else {
      reject("Something went wrong");
    }
  }, 500);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// Now taking an example and solve it using async/await and .then().catch()

// 1. async/await
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUsers();

// 2. .then()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
