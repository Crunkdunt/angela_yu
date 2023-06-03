function fibonacciGenerator(n) {
	//Do NOT change any of the code above 👆

	//Write your code here:
	var output = [];

	for (var i = 0; i < n; i++) {
		if (i < 2) {
			output.push(i);
		} else {
			output.push(output[i - 1] + output[i - 2]);
		}
	}
	return output;
	//Return an array of fibonacci numbers starting from 0.

	//Do NOT change any of the code below 👇
}
