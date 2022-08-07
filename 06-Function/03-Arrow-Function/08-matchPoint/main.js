let score = (num) => {
	if (num >= 3) {
		return 'you win';
	} else if (num == 0) {
		return ' 1 point';
	}
};

console.log(score(0));
