// IIFE - Immediately Invoked Function Expression

// Q. Why we use IIFE?
// A. To avoid global pollutions (variables), it is immediately executes like DB connectiones

// Q. How to use IIFE?
// ()() use two parentheses. first paranthese contain function

// Q. How we can write two IFFE?
// A. Just after first IIFE put semicolon ";" and then write second IIFE

// Named IIFE because we assign a name to function
(function DB_Connection() {
  console.log(`Database connected successfully`);
})();

const DB_Connection = (() => console.log(`Database connected successfully`))();

((name) => console.log(`Hello world! I am ${name}`))("Faizan");
