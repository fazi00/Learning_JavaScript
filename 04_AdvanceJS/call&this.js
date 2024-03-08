function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const user = new createUser("faizan", "faizan@example.com", "123");
console.log(user);

/* 

    call - current execution contect passed to another function
    Setusername(username) - only reference pass
    Setusername.call(username) - reference hold by using call keyword
    SetUsername.call(this, username) - "this" gives the reference. Matlab "this" khe ap mera context use kary 
    or jo uper wala "this" hai wo apni duties dusry "this" ko dey ra hai

*/
