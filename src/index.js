module.exports = function toReadable (number) {
	const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	if (number === 0) return 'zero';
	else return convert_hundreds(number);

	function convert_hundreds(number) {
		if (number >= 100 && number % 100 === 0) {
			return ones[Math.floor(number / 100)] + ' hundred';
		} else if (number >= 100) {
			return ones[Math.floor(number / 100)] + ' hundred ' + convert_tens(number % 100);
		} else {
			return convert_tens(number);
		}
	}

	function convert_tens(number) {
		if (number < 10) return ones[number];
		else if (number >= 10 && number < 20) return teens[number % 10];
		else if (number % 10 === 0) {
			return tens[Math.floor(number / 10)];
		}
		else {
			return tens[Math.floor(number / 10)] + ' ' + ones[number % 10];
		}
	}
}
