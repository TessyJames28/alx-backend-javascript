// Implement a class named Currency with code and name attributes

export default class Currency {
  /* eslint-disable no-underscore-dangle */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // setter
  set code(value) {
    this._code = value;
  }

  set name(value) {
    this._name = value;
  }

  // method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
  /* eslint-enable no-underscore-dangle */
}
