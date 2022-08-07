let num = prompt('Input number');

if (num === null || num === '' || num.trim() === '' || isNaN(num)) {
	alert('invalid number');
} else if (num > 0) {
	alert('Positive Number');
} else if (num == 0) {
	alert('zero');
} else if (num < 0) {
	alert('Negative number');
}
