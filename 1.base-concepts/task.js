"use strict"

function solveEquation(a, b, c) {
	const discriminant = b ** 2 - 4 * a * c;
	let arr = [];

	if (discriminant < 0) {} else if (discriminant == 0) {
		const value = -b / (2 * a);
		arr.push(value);
	} else {
		const value1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const value2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(value1, value2);
	}
	return arr;
}

solveEquation(1, -3, 2);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyRate = percent / 100 / 12;
	const loanBody = amount - contribution;
	const monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));
	const totalAmount = monthlyPayment * countMonths;
	const roundedTotalAmount = totalAmount.toFixed(2);
	return Number(roundedTotalAmount);
}

calculateTotalMortgage(10, 0, 50000, 12);