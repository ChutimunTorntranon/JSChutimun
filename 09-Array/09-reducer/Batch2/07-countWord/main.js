let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

let result = names.reduce(function (acc, item) {
	let currentkey = acc[item];
	if (!currentkey) {
		acc[item] = 1;
	} else {
		acc[item] = acc[item] + 1;
	}

	// acc[item] = 1;
	return acc;
}, {}); //?
