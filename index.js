var colors = require('colors');

module.exports = function (name) {
	var stack = [];

	var exists = function (element) {
		return stack.filter(function (e) {
			return element == e;
		}).length == 0;
	};

	var add = function (entry) {
		stack.push(entry);
	};

	var printObject = function (element) {
		var result = [];
		for (k in element) {
			if (typeof element[k] !== 'object') result.push(k + ' = ' + element[k]);
			else {
				var name = k;
				printObject(element[k]).forEach(function (e) {
					result.push(name + '.' + e);
				});
			}
		}
		return result;
	};

	exports = function (entry) {
		if (typeof entry == 'undefined') return stack;
		else add(entry);
	};

	exports.print = function (stream) {
		console.log((name).yellow);
		stack.forEach(function (element) {
			if (typeof element == 'string' || typeof element == 'number') console.error('> ' + element);
			else if (typeof element == 'object') {
				printObject(element).forEach(function (e) {
					console.error('> ' + e);
				});
			}
		});
		console.log('');
	};

	exports.includes = exists;
	return exports;
};