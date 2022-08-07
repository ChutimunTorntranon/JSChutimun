function max(a, b, c, d) {
	if (a === undefined) {
		return undefined;
	}
	if (b === undefined) {
		return a;
	}
	if (c === undefined) {
		return a > b ? a : b;
	}
	if (d === undefined) {
		Math.Max(a, b, c); // return Maximun value
		return max;
		return math.max(a, b, c);
	}
	return Math.Max(a, b, c, d);
}

console.log(max(9)); // undefined
console.log(max);
