'use strict'

/**
 * Main parser class for analyzing input strings
 */
class Parser {
	

	constructor() {
		this.input = "";
		this.numbers = [];
	}

	/**
	 * Extract digits from the input string
	 * @param  {String} input Input containing digits
	 * @return {Void}
	 */
	parse(input) {
		this.input = input;
		this._extractNumbers();
	}
	
	/**
	 * Get numbers extracted from string
	 * @return {Array}
	 */
	getNumbers() {
		return this.numbers;
	}

	/**
	 * Get the final sum of all the numbers
	 * @return {Integer}
	 */
	getSum() {
		return this._calculateSum();
	}


	/**
	 * Extract numbers from the input string
	 * and store them in this.numbers
	 * @return {Void}
	 */
	_extractNumbers() {

		var idx = 0;

		while (idx < this.input.length) {

			// extracted number in String
			var numberString = "";
			// flag to check whether continous matching is needed
			var continueMatching = false;

			if (this._isMinusSign(this.input[idx])) {
				numberString = "-";
				++ idx;
				continueMatching = true;
			} else if (this._isDigit(this.input[idx])) {
				continueMatching = true;
			} else {
				++ idx;
			}

			if (continueMatching) {
				while (this._isDigit(this.input[idx])) {
					numberString += this.input[idx];
					++ idx;
				}
			}

			// check if number string should be added
			if (numberString != "" && numberString != "-") {
				this.numbers.push(parseInt(numberString));
			}
		}

	}

	/**
	 * Check whether a character is Integer
	 * @param  {char}  c Character
	 * @return {Boolean}
	 */
	_isDigit(c) {
		return !isNaN(parseInt(c));
	}

	/**
	 * Check whether a character is a minus sign
	 * @param  {char}  c Character
	 * @return {Boolean}
	 */
	_isMinusSign(c) {
		return c == '-';
	}

	/**
	 * Calculate sum stored in the numbers array
	 * return -1 if no numbers found
	 * @return {Integer}
	 */
	_calculateSum() {

		// check if there are no number
		if (this.numbers.length == 0) {
			return -1;
		}

		var sum = 0;

		this.numbers.forEach(num => {
			sum += num;
		});

		return sum;

	}

}

module.exports = Parser;