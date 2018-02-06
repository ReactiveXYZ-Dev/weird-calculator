var assert = require('assert');
var Parser = require('../src/js/parser');

describe('Spec tests', function() {

	this.timeout(500);
  	
  	it('Should return 4245', function() {

  		var p = new Parser;
  		p.parse("3456 789");
  		assert.equal(p.getSum(), 4245);

  	});

  	it('Should return -1', function() {

  		var p = new Parser;
  		p.parse("Testing");
  		assert.equal(p.getSum(), -1);

  	});

  	it('Should return 7', function() {

  		var p = new Parser;
  		p.parse("Testing 60 -1 -52");
  		assert.equal(p.getSum(), 7);

  	});

  	it('Should return 77', function() {

  		var p = new Parser;
  		p.parse("T65esting11 1");
  		assert.equal(p.getSum(), 77);

  	});

});

describe('Additional tests', function() {

	this.timeout(500);

	it('Should return 10', function() {

		var p = new Parser;
		p.parse("T1E2s3T4");
		assert.equal(p.getSum(), 10);

	});

	it('Should return 1', function() {

		var p = new Parser;
		p.parse("-----1T2TES0");
		assert.equal(p.getSum(), 1);

	});

	it('Should return -7', function() {

		var p = new Parser;
		p.parse("-1-2-3-4T5-2");
		assert.equal(p.getSum(), -7);

	});

	it('Should return 5', function() {

		var p = new Parser;
		p.parse("3 TE-1 5ST-2");
		assert.equal(p.getSum(), 5);

	});

});	