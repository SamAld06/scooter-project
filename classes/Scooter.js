class Scooter {
  // Scooter code here
  static nextSerial = 1

  user = null;
  serial = Scooter.nextSerial++;
  charge = 100;
  isBroken = false ;

  constructor(station) {
    this.station = station
  }

  rent(user) {
    if (this.isBroken) {
      throw new Error("scooter needs repair")
    }else if (this.charge <= 20) {
      throw new Error("scooter needs to charge")
    }else {
      this.station = null
      this.user = user
    }
  }

  dock(station) {
    if (user === null) {
      throw new Error("This scooter has not been checked out")
    }
    this.user = null
    this.station = station
  }

  // recharge() {
  //   console.log("(Starting scooter charge) Current charge: ${this.charge}%")
  //   setTimeout(() => {
  //     this.charge += 20
  //     console.log("Current charge: ${this.charge")
  //   })
  // }

  // requestRepair() {

  // }

}

module.exports = Scooter;
