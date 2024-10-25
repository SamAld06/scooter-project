const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  // ScooterApp code here
    static stations = {
      "Charles Street": [],
      "Pratt Street": [],
      "Light Street": [],

    };
    static registeredUsers = {  }

  static registerUser(username, password, age) {
    if (!ScooterApp.registeredUsers[username] && age >= 18) {
      console.log("user has been registered")
      return User
    }else if (age < 18)  {
      throw new Error("too young to register")
    }else {
      throw new Error("already registered")
    }
  }

  loginUser(username, password) {
    if (ScooterApp.registeredUsers[username] && ScooterApp.registeredUsers[username].password === password) {
      console.log("user has been logged in")
      ScooterApp.registeredUsers[username].loggedIn = true
    }else {
      throw new Error("Username or password is incorrect")
    }
  }

  logoutUser(username) {
    if (ScooterApp.registeredUsers[username]) {
      console.log("user is logged out")
      ScooterApp.registeredUsers[username].loggedIn = false
    }else {
      throw new Error("no such user is logged in")
    }
  }

  createScooter(station) {
    if (ScooterApp.stations !== station) {
      throw new Error("no such station error")
    }else {
      ScooterApp.stations[station].push(Scooter.serial)
      console.log("created new scooter")
      return Scooter.serial
    }
  }
  
}

module.exports = ScooterApp;
