/* test file */
const request = require('request');
const expect = require('chai').expect;

describe('index page', () => {
  const api = {
    url: 'http://localhost:7865',
    methods: 'GET',
  }

  it('checks the correct status code', () => {
    request(api, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });
  
  it('checks the correct result', () => {
    request(api, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
    });
  });
  
  it('checks the correct content length', () => {
    request(api, (err, res, body) => {
      expect(res.headers['content-length']).to.equal('29');
    });
  });
});

describe('Api call to cart with id as a number', () => {
  it('checks the correct status code when id is a number', () => {
    const url = 'http://localhost:7865/cart/12';
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });
  
  it('checks error status code when id is not a number', () => {
    const url = 'http://localhost:7865/cart/hello';
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
    });
  });
  
  it('checks body of page when id is a number', () => {
    const url = 'http://localhost:7865/cart/12';
    request(url, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
    });
  });
});
