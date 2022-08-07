const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

// let result = [];

// for (let index in alphabets) {
// 	if (alphabets[index] == 'a') {
// 		result.push(index);
// 	}
// }

// console.log(result); // 0,2,4

let result = [];
let foundIndex = alphabets.indexOf('a');

do {
	alphabets.indexOf('a');
	if (foundIndex !== -1) {
		result.push(foundIndex);
		foundIndex = alphabets.indexOf('a', foundIndex + 1);
	}
} while (foundIndex !== -1);
