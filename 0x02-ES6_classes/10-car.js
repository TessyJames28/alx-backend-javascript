export default class Car {
  constructor(brand, motor, color) {
    /* eslint-disable no-underscore-dangle */
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // method
  cloneCar() {
    return new this.constructor();
  }
  /* eslint-enable no-underscore-dangle */
}
