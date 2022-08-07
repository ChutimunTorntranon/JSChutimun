function extractCurrencyValue(string, rate) {
	let money = +string.slice(1) * rate;

	return 'THB' + money;
}
console.log(extractCurrencyValue('$120', 36));
