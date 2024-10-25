const { describe, expect, it } = require("@jest/globals");
const User = require("../classes/User.js");

describe("user.login(password)", () => {
  it.skip("logs a user in if the password is correct", () => {
    // Arrange
    const user = new User("saldred", "password", 18)
    // Act
    user.login("password")
    // Assert
    expect(user.loggedIn).toBe(true)
  });

  it.skip("throws an error if the password is incorrect", () => {
    // Arrange
    const user = new User("saldred", "bassword", 18)
    // Act
    function attemptLogin() {
      user.login("bassword123")
    }
    // Assert
    expect(attemptLogin).toThrow("incorrect password")
    expect(user.loggedIn).toBe(false)
  });
});

describe("user.logout()", () => {
  it.skip("logs a user out", () => {
    // Arrange
    const user = new User("saldred", "1234", 18)
    user.login("1234")
    // Act
    user.logout()
    // Assert
    expect(loggedIn).toBe(false)
  });
});
