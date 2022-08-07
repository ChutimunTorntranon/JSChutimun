function min(a, b) {
	// if (a < b) {
	// 	return a;
	// } else {
	// 	return b;
	// }

	if (a < b) {
		// return a;
	}

	// return b;
	return a < b ? a : b;
}

let result = min(99, 10);
alert(result);
