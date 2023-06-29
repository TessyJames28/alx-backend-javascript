export default class Building {
  constructor(sqft) {
    /* eslint-disable no-underscore-dangle */
    this._sqft = sqft;

    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw TypeError('Class extending Building must override evacuationWarningMessage');
    }
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  // setter
  set sqft(value) {
    this._sqft = value;
  }
  /* eslint-disable no-underscore-dangle */
}
