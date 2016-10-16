var should = require('chai').should(),
  currencies = require('../currencies'),
  information = currencies.information,
  isValid = currencies.isValid;

describe('#information', function() {
  it('returns information about currency from alpha code', function() {
    information("AED").num.should.equal(784);
    information("AED").places.should.equal(2);
    information("AED").name.should.equal("United Arab Emirates dirham");
    information("aeD").num.should.equal(784);
    information("aEd").places.should.equal(2);
    information("AeD").name.should.equal("United Arab Emirates dirham");
  });
})

describe("#isValid", function() {
  it('returns true if the currency alpha is a valid one (ISO4217)', function() {
    isValid("aeD").should.equal(true);
    isValid("AeD").should.equal(true);
    isValid("test").should.equal(false);
  });
})