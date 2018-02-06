'use strict'

const $ = require('jquery');
const StringParser = require('./parser');

// handle form submit event
$('#submit-btn').on('click', function(e) {

	e.preventDefault();

	// get entered value
	let input = $('#input-string').val();

	// parse the string
	const parser = new StringParser;
	parser.parse(input);

	// display the result
	let sum = parser.getSum();
	var result;
	if (sum == -1) {
		result = "Oops. No numbers extracted ('')";
	} else {
		result = `Your calculated sum is ${parser.getSum()}`;
	}
	$('#result-msg').html(result);

});
