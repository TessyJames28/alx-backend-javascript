/* test suite using sinon */
const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let sendPaymentSpy;
  let consoleLogSpy;

  beforeEach(() => {
    // create a spy
    sendPaymentSpy = sinon.spy(Utils, 'calculateNumber');
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    //reset spy
    sendPaymentSpy.restore();
    consoleLogSpy.restore()
  });

  it('calculate and log the total is 120', () => {
    //call the function
    sendPaymentRequestToApi(100, 20);
    //verify result
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
    expect(sendPaymentSpy.calledOnce).to.be.true;
  });
  
  it('calculate and log the total is 20', () => {
    //call the function
    sendPaymentRequestToApi(10, 10);
    //verify result
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');
    expect(sendPaymentSpy.calledOnce).to.be.true;
  });
});
