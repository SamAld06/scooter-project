const { describe, expect, it } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");
const User = require("../classes/User.js");

describe("scooter.rent(user)", () => {
  it.skip("checks a scooter out to a user", () => {
    // Arrange
    const scooter = new Scooter("Charles Street")
    const user = new User("saldred", "notpassword", 18)
    // Act
    scooter.rent(user)
    // Assert
    expect(scooter.station).toBeNull()  
    expect(scooter.user).toBe(user)

  });

  it.skip("throws an error if battery dead or scooter broken", () => {
    // Arrange
    const scooter = new Scooter("Charles Street")
    const user = new User("saldred", "notpasswrod", 18)
    scooter.charge = 8
    scooter.isBroken = true;
    // Act
    function processRent() {
      scooter.rent(user);
    }
    // Assert
    expect(processRent).toThrow();
    expect(scooter.station).toBe("Charles Street");
    expect(scooter.user).toBeNull();
  });
});

describe("scooter.dock(station)", () => {
  it.skip("returns a scooter to a station", () => {
    // Arrange
    const scooter = new Scooter("Charles Street")
    const user = new User("saldred", "unlock", 18)
    scooter.rent(user)
    // Act
    scooter.dock("Charles Street")
    // Assert
    expect(scooter.user).toBeNull()
    expect(scooter.station).toBe("Charles Street")
  });
});

describe("scooter.charge()", () => {
  it.skip("charges a scooter", () => {
    // Arrange
    const scooter = new Scooter("Charles Street")
    scooter.charge = 12
    // Act
    scooter.recharge()
    // Assert
    expect(scooter.charge).toBe(100)
  });
});

describe("scooter.repair()", () => {
  it.skip("repairs a scooter", () => {
    // Arrange
    const scooter = new Scooter("Charles Street")
    scooter.isBroken = true
    // Act
    scooter.repair()
    // Assert
    expect(scooter.isBroken).toBe(false)
  });
});
