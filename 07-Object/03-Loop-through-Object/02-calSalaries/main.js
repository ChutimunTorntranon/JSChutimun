let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

let calSalaries = function (object) {
	let sum = 0;
	for (let key in object) {
		let CurrentSalary = object[key];
		sum += CurrentSalary;
	}
	return sum;
};

console.log(calSalaries(salaries));
