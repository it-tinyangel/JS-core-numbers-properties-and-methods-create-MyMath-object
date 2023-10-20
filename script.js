const MyMath = {
	PI: 3.14159265359,

	pow: function (number, degree) {
		if (isNaN(number) || isNaN(degree) || !isFinite(number) || !isFinite(degree)) {
			return 'Error: Please, enter a numbers.';
		}
		let result = 1;
		for (let i = 0; i < (degree < 0 ? -degree : degree); i++) {
			result *= number;
		}
		return degree < 0 ? 1 / result : result;
	},

	abs: function (number) {
		if (isNaN(number) || !isFinite(number)) {
			return 'Error: Please, enter a number.';
		}
		return number < 0 ? -number : number;
	},

	max: function (...args) {
		if (args.length === 0) {
			return 'Error: Please, enter numbers.';
		}
		let maxNumber = Number.NEGATIVE_INFINITY;
		for (let i = 0; i < args.length; i++) {
			if (isNaN(args[i]) || !isFinite(args[i])) {
				return 'Error: Please, enter numeric value for all numbers.';
			}
			if (args[i] > maxNumber) {
				maxNumber = args[i];
			}
		}
		return maxNumber;
	},

	min: function (...args) {
		if (args.length === 0) {
			return 'Error: Please, enter a numbers.';
		}
		let minNumber = Number.POSITIVE_INFINITY;
		for (let i = 0; i < args.length; i++) {
			if (isNaN(args[i]) || !isFinite(args[i])) {
				return 'Error: Please, enter numeric value for all numbers.';
			}
			if (args[i] < minNumber) {
				minNumber = args[i];
			}
		}
		return minNumber;
	}
};

console.log(`MyMath.PI: ${MyMath.PI}`);
console.log(`MyMath.pow(): ${MyMath.pow()}`);
console.log(`MyMath.pow(5, 'j'): ${MyMath.pow(5, 'j')}`);
console.log(`MyMath.pow(5, -3): ${MyMath.pow(5, -3)}`);
console.log(`MyMath.abs(): ${MyMath.abs()}`);
console.log(`MyMath.abs('j'): ${MyMath.abs('j')}`);
console.log(`MyMath.abs(-7): ${MyMath.abs(-7)}`);
console.log(`MyMath.max(): ${MyMath.max()}`);
console.log(`MyMath.max(10, 5, 18, 'j', 25, 12): ${MyMath.max(10, 5, 18, 'j', 25, 12)}`);
console.log(`MyMath.max(10, 5, 18, 3, 25, 12): ${MyMath.max(10, 5, 18, 3, 25, 12)}`);
console.log(`MyMath.min(12, 7, 3, 9): ${MyMath.min(12, 7, 3, 9)}`);
