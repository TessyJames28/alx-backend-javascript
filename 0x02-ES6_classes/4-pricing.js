// Implement a class named Princing that extends class Currency

export default class Pricing {
  /* eslint-disable no-underscore-dangle */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // setters
  set amount(value) {
    this._amount = value;
  }

  set currency(value) {
    this._currency = value;
  }

  // method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
  /* eslint-enable no-underscore-dangle */

  // static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
