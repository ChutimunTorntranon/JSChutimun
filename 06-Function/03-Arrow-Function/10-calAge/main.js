let calDayFromBirthYear = (birthday) => {
	let day = 0;

	for (let i = birthday; i <= 2020; i++) {
		if (calDayFromBirthYear(i)) {
			dday += 366;
		} else {
			day += 365;
		}
	}
	return today;
};

console.log(calDayFromBirthYear(12));
