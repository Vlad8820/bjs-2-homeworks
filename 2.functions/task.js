function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let avg;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		} else if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}
	avg = Math.round(sum / arr.length * 100) / 100;

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	if (arr.length > 0) {
		return Math.abs(max - min);
	} else {
		return 0;
	}
}

function differenceEvenOddWorker(...arr) {
	let sumOdd = 0;
	let sumEven = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEven += arr[i];
		} else {
			sumOdd += arr[i];
		}
	}
	return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
	let avg;
	let sum = 0;
	let count = 0;
	if (arr.length <= 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sum += arr[i];
			count++;
		}
	}
	avg = sum / count;
	return avg;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (const data of arrOfArr) {
		const result = func(...data);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}