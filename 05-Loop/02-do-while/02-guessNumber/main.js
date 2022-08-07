let answer = prompt('player1');
// let answer2 = prompt('player2');

if (+answer < 1 || +answer > 99) {
	alert('invalid range');
} else {
	let count = 0;
	let guess;
	do {
		let guess = prompt('player 2 : Enter number');
		count++;
		if (guess == answer) {
			alert('correct');
			alert(count);
		} else if (+guess < +answer && +guess > 0) {
			alert('Less than');
		} else if (+guess > +answer) {
			alert('More than');
		} else {
			alert('Please input number between 1-99');
		}
	} while (guess != answer);
}
