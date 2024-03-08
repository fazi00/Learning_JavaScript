class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptedPassword() {
    return `${this.password}Ahnnbchdu?12kxnjks*&bsjb`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user = new User("Zaid", "zaid@17417@gmail.com", "123");
// console.log(user.encryptedPassword())
// console.log(user.changeUsername())

// // Behind the scene if there is no classes
// // then we achieve this functionality

function UserDetail(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

UserDetail.prototype.encryptedPassword = function () {
  return `${this.password}abc`;
};
UserDetail.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const data = new UserDetail("Awais", "awais@example.com", "123");
// console.log(data.encryptedPassword());
// console.log(data.changeUsername());

// // +++++++++++++++ Class Inheritance +++++++++++++++
class Users {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    //console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends Users {
  constructor(username, email, password) {
    // super exactly do the same functionality that we discussed while studying ".call"
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    //console.log(`A new course was added by ${this.username}`);
  }
}

const course = new Teacher("course", "course@teacher.com", "123");

course.logMe();
const extraCourse = new Users("extraCourse");

extraCourse.logMe();

console.log(chai instanceof Users);

// +++++++++++++++++++++++ NOTES +++++++++++++++++++++++
/* 
  1. In OOP, a class is an extensible program code template for creating objects
  2. In JavaScript, a class is a kind of function
  3. Classes are non-enumerable and always in strict mode
  4. Class Inheritance is a way for one class to extend another class, so we can create new functionality on top of the existing.
  5. The instanceof operator allows to check whether an object belongs to a certain class
*/
class Course {
  constructor(name) {
    this.name = name;
  }
  courseName() {
    console.log(`The couse is ${this.name}`);
  }
}
const c_name = new Course("DSA");
c_name.courseName();
console.log(typeof Course);
