let a = prompt('Enter number 1 : ');
let b = prompt('Enter number 2 : ');

let answer = prompt('Player A : Enter Number');

if (+answer < 1 || +answer > 99) {
	alert('Invalid Range');
} else {
	let Count = 0;
	let guess;
	do {
		guess = prompt('Player B : Enter Number');
		Count++;
		if (guess == answer) {
			alert('Correct');
			alert(Count);
		} else if (+guess < +answer && guess > 0) {
			alert('Less Than');
		} else if (+guess > +answer) {
			alert('More Than');
		} else {
			alert('Please Input Number 1-99');
		}
	} while (guess !== answer);
}
