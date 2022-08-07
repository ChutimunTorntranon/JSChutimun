function NotaNumber(num) {
	return num === null || num === '' || num.trim() === '' || isNaN(num);
}
function PlusNumber(num) {
	return !(num === null || num === '' || num.trim() === '' || isNaN(num));
}

let result = prompt('Input Number1');
let result2 = prompt('Input Number2');
let result3 = parseInt(result) + parseInt(result2);

if (PlusNumber(result + result2)) {
	alert(result3);
} else if (NotaNumber(result + result2)) {
	alert('Invalid Number');
}
