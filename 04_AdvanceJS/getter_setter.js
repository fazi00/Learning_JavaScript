// ++++++++++++++++++ Class base Syntax ++++++++++++++++++
// class User {
//   constructor(email) {
//     this._email = email;
//   }
//   get email() {
//     return this._email.toLowerCase();
//   }
//   set email(value) {
//     this._email = value;
//   }
// }
// const userDetail01 = new User("FAIZAN@EXAMPLE.Ai");
//console.log(userDetail01.email);

// ++++++++++++++++++ Function base Syntax (Old Approach) ++++++++++++++++++
// function User(email) {
//   this._email = email;

//   // provide "this" otherwise it takes global "this" variable
//   Object.defineProperty(this, "email", {
//     get: function () {
//       return this._email.toLowerCase();
//     },
//     set: function (value) {
//       this._email = value;
//     },
//   });
// }

// const userDetail02 = new User("F@FAIZAN.COM");
//console.log(userDetail02.email)
// ++++++++++++++++++ Object base Syntax (very very rare use) ++++++++++++++++++

const userDetail = {
  _email: "AHMED@EXAMPLE.YAHOO",
  get email() {
    return this._email.toLowerCase();
  },
  set email(value) {
    this._email = value;
  },
};

const userDetail03 = Object.create(userDetail);
console.log(userDetail03.email);
