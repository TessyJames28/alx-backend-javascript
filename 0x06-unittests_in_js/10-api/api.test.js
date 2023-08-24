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

describe('Available Payment', () => {
  const url = 'http://localhost:7865/available_payments';
  it('checks for status code', () => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });
  
  it('checks for body', () => {
    request(url, (err, res, body) => {
      expect(JSON.parse(body)).to.deep.equal({"payment_methods":{"credit_cards":true,"paypal":false}});
    });
  });
});

describe('Login', () => {
  const url = 'http://localhost:7865/login';
  
  it('checks for body', () => {
    request.post(url, {json: { "userName": "Betty" } }, (err, res, body) => {
      expect(body).to.equal('Welcome Betty');
    });
  });
  
  it('checks for status code', () => {
    request.post(url, {json: { "userName": "Betty" } }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });
  
  it('checks for bad request', () => {
    const url = 'http://localhost:7865/login';
    request.post(url, {json: { "username": "Betty" } }, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
    });
  });
});
