import Car from './10-car';

export default class EVCar extends Car {
  /* eslint-disable no-underscore-dangle */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
  /* eslint-enable no-underscore-dangle */
}
