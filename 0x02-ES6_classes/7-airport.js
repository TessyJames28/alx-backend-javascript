export default class Airport {
  constructor(name, code) {
    /* eslint-disable no-underscore-dangle */
    this._name = name;
    this._code = code;
  }

  // method
  toString() {
    return `[object ${this._code}]`;
  }
  /* eslint-enable no-underscore-dangle */
}
