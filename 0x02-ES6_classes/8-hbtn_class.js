export default class HolbertonClass {
  constructor(size, location) {
    /* eslint-disable no-underscore-dangle */
    this._size = size;
    this._location = location;
  }

  // implement Symbol.toPrimitive
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    return this._location;
    /* eslint-enable no-underscore-dangle */
  }
}
