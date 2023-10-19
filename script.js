const MyMath = {
	PI: 3.14159265359,

	pow: function (number, degree) {
		if (isNaN(number) || isNaN(degree) || typeof number !== 'number' || typeof degree !== 'number') {
			return 'Error: Please, enter a numeric value for number and power.';
		}
		let result = 1;
		for (let i = 0; i < degree; i++) {
			result *= number;
		}
		return degree < 0 ? 1 / result : result;
	},

	abs: function (number) {
		if (isNaN(number) || typeof number !== 'number') {
			return 'Error: Please, enter a numeric value.';
		}
		return number < 0 ? -number : number;
	},

	max: function () {
		if (arguments.length === 0) {
			return 'Error: Please, enter numbers.';
		}
		let maxNumber = Number.NEGATIVE_INFINITY;
		for (let i = 0; i < arguments.length; i++) {
			if (isNaN(arguments[i]) || typeof arguments[i] !== 'number') {
				return 'Error: Please, enter numeric value for all numbers.';
			}
			if (arguments[i] > maxNumber) {
				maxNumber = arguments[i];
			}
		}
		return maxNumber;
	},

	min: function () {
		if (arguments.length === 0 || arguments.length === '') {
			return 'Error: Please, enter a numbers.';
		}
		let minNumber = Number.POSITIVE_INFINITY;
		for (let i = 0; i < arguments.length; i++) {
			if (isNaN(arguments[i]) || typeof arguments[i] !== 'number') {
				return 'Error: Please, enter numeric value for all numbers.';
			}
			if (arguments[i] < minNumber) {
				minNumber = arguments[i];
			}
		}
		return minNumber;
	}
};

console.log(MyMath.PI);
console.log(MyMath.pow(5, 3));
console.log(MyMath.abs(-7));
console.log(MyMath.max(10, 5, 18, 15));
console.log(MyMath.min(12, 7, 3, 9));