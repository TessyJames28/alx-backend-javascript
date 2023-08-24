/* test suite using sinon */
const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('calculate and log the total correctly', () => {
    const sendPaymentSpy = sinon.spy(Utils, 'calculateNumber');
    //call the function
    sendPaymentRequestToApi(100, 20);
    //verify result
    expect(sendPaymentSpy.calledOnceWith("SUM", 100, 20)).to.be.true;
    expect(sendPaymentSpy.calledOnce).to.be.true;

   // restore the spy
    sendPaymentSpy.restore();
  });
  
  it('calculate and log the total correctly', () => {
    const sendPaymentSpy = sinon.spy(Utils, 'calculateNumber');
    //call the function
    sendPaymentRequestToApi(100, 20);
    //verify result
    expect(sendPaymentSpy.calledOnce).to.be.true;

   // restore the spy
    sendPaymentSpy.restore();
  });
  
  it('calculate and log the total correctly', () => {
    const sendPaymentSpy = sinon.spy(Utils, 'calculateNumber');
    //call the function
    sendPaymentRequestToApi()
    sendPaymentRequestToApi(100, 20);
    //verify result
    expect(sendPaymentSpy.calledOnce).to.be.false;

   // restore the spy
    sendPaymentSpy.restore();
  });
  
  it('calculate and log the total correctly', () => {
    const sendPaymentSpy = sinon.spy(Utils, 'calculateNumber');
    //call the function
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi()
    //verify result
    expect(sendPaymentSpy.calledTwice).to.be.true;

   // restore the spy
    sendPaymentSpy.restore();
  });
  
  it('calculate and log the total correctly', () => {
    const sendPaymentSpy = sinon.spy(Utils, 'calculateNumber');
    //call the function
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi()
    //verify result
    expect(sendPaymentSpy.calledTwice).to.be.true;
    expect(sendPaymentSpy.callCount).to.equal(2);

   // restore the spy
    sendPaymentSpy.restore();
  });
  
  it('calculate and log the total correctly', () => {
    const sendPaymentSpy = sinon.spy(Utils, 'calculateNumber');
    //call the function
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi()
    //verify result
    expect(sendPaymentSpy.firstCall.args).to.deep.equal(["SUM", 100, 20]);
    expect(sendPaymentSpy.secondCall.args).to.deep.equal(["SUM", undefined, undefined]);

   // restore the spy
    sendPaymentSpy.restore();
  });
});
