// function isPrime() {
// 	let isPrime = true;

// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			break;
// 		}
// 	}

// 	return isPrime;
// }

console.log(checkPrime(7));
console.log(checkPrime(20));

function printPrime(limit) {
	for (let i = 2; i <= limit; i++) {
		let isPrime = checkPrime(i);

		if (isPrime) {
			console.log(i);
		}
	}
}
printPrime(500);
