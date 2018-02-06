var assert = require('assert');
var TestClass = require('../src/js/app');

describe('Test1', function() {
  	it('Should return "hi" ', function() {
  		var test = new TestClass;
  		assert.equal(test.sayHi(), "hi");
  	});
});