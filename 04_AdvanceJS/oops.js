// +++++++++++++++++++++ Object Lietral - Literally an Object +++++++++++++++++++++
const user = {
  username: "James",
  email: "james12@gmail.com",
  userLoggedCount: 2,
  isLoggedIn: true,
  getUserDetail: function () {
    c; //onsole.log(`Welcome ${this.username}`); // if we don't use 'this' keyword then it cannot determine for which we are talking or what value of objetc we want to access
    //console.log(this)
  },
};

// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this)

// +++++++++++++++++++++ Constructor Function +++++++++++++++++++++

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;

  // this.username is basically a variable name because in coding we see many examples like this.
}

// const user01 = User("Faizan", 2, true)
// const user02 = User("Ahmed", 12, false)
// console.log(user01)

// If we don't user "new" then it will over right the previous value which creates mess when we working in big projects

const user01 = new User("Faizan", 2, true);
const user02 = new User("Ahmed", 12, false);
console.log(user01);
console.log(user02);
