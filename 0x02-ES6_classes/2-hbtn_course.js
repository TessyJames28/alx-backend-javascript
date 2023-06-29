// Implementation of a class named HolbertonCourse with 3 attributes

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (length) !== 'number') {
      throw TypeError('Length must be a number');
    }

    /* eslint-disable no-underscore-dangle */
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setters
  set name(value) {
    if (typeof (value) !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    this._length = value;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw TypeError('Students must be an array');
    }

    for (const val of value) {
      if (typeof (val) !== 'string') {
        throw TypeError('Students must be a string array');
      }
    }
    this._students = value;
  }
/* eslint-enable no-underscore-dangle */
}
