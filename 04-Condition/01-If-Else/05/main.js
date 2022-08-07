function NotaNumber(num) {
	return num === null || num === '' || num.trim() === '' || isNaN(num);
}
function RightNumber(num) {
	return !(num === null || num === '' || num.trim() === '' || isNaN(num));
}
let result = prompt('Enter Number');

if (RightNumber(result)) {
	if (+result % 2 === 0) {
		alert('Even Number');
	} else {
		alert('Odd Number');
	}
} else {
	alert('Invalid');
}
