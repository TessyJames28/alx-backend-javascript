/* test cases for calculateNumber function */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('example Test Suite', () => {
  it('should pass if values are equal', () => {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber(1.1, 3.3);
    assert.strictEqual(result, 4);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber(-1.1, -3.3);
    assert.strictEqual(result, -4);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber(-1.5, 3.3);
    assert.strictEqual(result, 2);
  });

  it('should not pass when a boolean value is given', () => {
    const result = calculateNumber(false, 3);
    assert.notStrictEqual(result, NaN);
  });
});
