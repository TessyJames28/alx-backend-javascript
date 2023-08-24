/* test cases for calculateNumber function */
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('example Test Suite', () => {
  it('should pass if values are equal', () => {
    const result = calculateNumber("SUM", 1, 3);
    expect(result).to.equal(4);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUM", 1, 3.7);
    expect(result).to.equal(5);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUM", 1.2, 3.7);
    expect(result).to.equal(5);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUM", 1.5, 3.7);
    expect(result).to.equal(6);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUBTRACT", 1.1, 3.3);
    expect(result).to.equal(-2);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUM", -1.1, -3.3);
    expect(result).to.equal(-4);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUM", -1.5, 3.3);
    expect(result).to.equal(2);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber("SUBTRACT", 2, 3);
    expect(result).to.equal(-1);
  });
  
  it('should pass if values are equal', () => {
    const result = calculateNumber("SUBTRACT", 1.4, 4.5);
    expect(result).to.equal(-4);
  });
  
  it('should pass if values are equal', () => {
    const result = calculateNumber("SUBTRACT", -2, 3);
    expect(result).to.equal(-5);
  });
  
  it('should pass if values are equal', () => {
    const result = calculateNumber("SUBTRACT", 4, -3);
    expect(result).to.equal(7);
  });
  
  it('should pass if values are equal', () => {
    const result = calculateNumber("DIVIDE", 1.4, 4.5);
    expect(result).to.equal(0.2);
  });
  
  it('should pass if values are equal', () => {
    const result = calculateNumber("DIVIDE", 1.4, 0);
    expect(result).to.equal("Error");
  });
  
  it('should pass if values are equal', () => {
    const result = calculateNumber("DIVIDE", -1.4, 4.5);
    expect(result).to.equal(-0.2);
  });  
});
