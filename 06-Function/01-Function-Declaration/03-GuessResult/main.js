// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

let message = 'Welcome to Thailand';

function logMessage(message) {
	message = 'Hello everybody';
	console.log(message); // \* hello everybody
	logMessage(message);
	console.log(message); // \*\*welcome to thailand
}
let name = 'John';

function sayHi(input) {
	console.log(name); // \*\*\* john
	name = input;
}

sayHi();
console.log(name); // \*\*\*\* undefined
