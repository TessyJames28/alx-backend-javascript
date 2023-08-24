/* test suite using sinon */
const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('calculate and log the total correctly', () => {
    const sendPaymentStub = sinon.stub(Utils, 'calculateNumber');
    // set stub retun
    sendPaymentStub.withArgs('SUM', 100, 20).returns(10);
    //call the function
    sendPaymentRequestToApi(100, 20);
    //verify result
    expect(sendPaymentStub.calledOnceWith("SUM", 100, 20)).to.be.true;
    expect(sendPaymentStub.calledOnce).to.be.true;

   // restore the spy
    sendPaymentStub.restore();
  });
  
  it('calculate and log the total correctly', () => {
    const sendPaymentStub = sinon.stub(Utils, 'calculateNumber');
    // set stub retun
    sendPaymentStub.withArgs('SUM', 100, 20).returns(10);
    //call the function
    sendPaymentRequestToApi(100, 20);
    //verify result
    expect(sendPaymentStub.calledOnce).to.be.true;

   // restore the spy
    sendPaymentStub.restore();
  });
  
  it('calculate and log the total correctly', () => {
    const sendPaymentStub = sinon.stub(Utils, 'calculateNumber');
    // set stub retun
    sendPaymentStub.withArgs('SUM', 100, 20).returns(10);
    //call the function
    sendPaymentRequestToApi()
    sendPaymentRequestToApi(100, 20);
    //verify result
    expect(sendPaymentStub.calledOnce).to.be.false;

   // restore the spy
    sendPaymentStub.restore();
  });
  
  it('calculate and log the total correctly', () => {
    const sendPaymentStub = sinon.stub(Utils, 'calculateNumber');
    // set stub retun
    sendPaymentStub.withArgs('SUM', 100, 20).returns(10);
    //call the function
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi()
    //verify result
    expect(sendPaymentStub.calledTwice).to.be.true;

   // restore the spy
    sendPaymentStub.restore();
  });
  
  it('calculate and log the total correctly', () => {
    const sendPaymentStub = sinon.stub(Utils, 'calculateNumber');
    // set stub retun
    sendPaymentStub.withArgs('SUM', 100, 20).returns(10);
    //call the function
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi()
    //verify result
    expect(sendPaymentStub.calledTwice).to.be.true;
    expect(sendPaymentStub.callCount).to.equal(2);

   // restore the spy
    sendPaymentStub.restore();
  });
  
  it('calculate and log the total correctly', () => {
    const sendPaymentStub = sinon.stub(Utils, 'calculateNumber');
    // set stub retun
    sendPaymentStub.withArgs('SUM', 100, 20).returns(10);
    //call the function
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi()
    //verify result
    expect(sendPaymentStub.firstCall.args).to.deep.equal(["SUM", 100, 20]);
    expect(sendPaymentStub.secondCall.args).to.deep.equal(["SUM", undefined, undefined]);

   // restore the spy
    sendPaymentStub.restore();
  });
  
  it('calculate and log the total correctly', () => {
    const sendPaymentStub = sinon.stub(Utils, 'calculateNumber');
    const sendPaymentSpy = sinon.spy(console, 'log');
    // set stub retun
    sendPaymentStub.withArgs('SUM', 100, 20).returns(10);
    //call the function
    sendPaymentRequestToApi(100, 20);
    //verify result
    expect(sendPaymentStub.firstCall.args).to.deep.equal(["SUM", 100, 20]);
    sinon.assert.calledWithExactly(sendPaymentSpy, 'The total is: 10');
   // restore the spy
    sendPaymentStub.restore();
    sendPaymentSpy.restore();
  });
});
