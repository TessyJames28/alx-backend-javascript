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
