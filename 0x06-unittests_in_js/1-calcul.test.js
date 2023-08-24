/* test cases for calculateNumber function */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('example Test Suite', () => {
  it('should pass if values are equal', () => {
    const result = calculateNumber("SUM", 1, 3);
    assert.strictEqual(result, 4);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUM", 1, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUM", 1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUM", 1.5, 3.7);
    assert.strictEqual(result, 6);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUBTRACT", 1.1, 3.3);
    assert.strictEqual(result, -2);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUM", -1.1, -3.3);
    assert.strictEqual(result, -4);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUM", -1.5, 3.3);
    assert.strictEqual(result, 2);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUBTRACT", 2, 3);
    assert.strictEqual(result, -1);
  });
  
  it('should pass if values are equal', () => {
    const result = calculateNumber("SUBTRACT", 1.4, 4.5);
    assert.strictEqual(result, -4);
  });
  
  it('should pass if values are equal', () => {
    const result = calculateNumber("SUBTRACT", -2, 3);
    assert.strictEqual(result, -5);
  });
  
  it('should pass if values are equal', () => {
    const result = calculateNumber("SUBTRACT", 4, -3);
    assert.strictEqual(result, 7);
  });
  
  it('should pass if values are equal', () => {
    const result = calculateNumber("DIVIDE", 1.4, 4.5);
    assert.strictEqual(result, 0.2);
  });
  
  it('should pass if values are equal', () => {
    const result = calculateNumber("DIVIDE", 1.4, 0);
    assert.strictEqual(result, "Error");
  });
  
  it('should pass if values are equal', () => {
    const result = calculateNumber("DIVIDE", -1.4, 4.5);
    assert.strictEqual(result, -0.2);
  });  
});
