import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    /* eslint-disable no-underscore-dangle */
    this._sqft = sqft;
    this._floors = floors;
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  // method override
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
  /* eslint-enable no-underscore-dangle */
}
