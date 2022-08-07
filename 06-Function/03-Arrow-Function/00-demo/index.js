let myFunc = function (a, b, c, d) {
	return a + b + c + d;
};

let x = myArrowFunc(1, 2, 3, 4);
console.log(`x : ${x}`);

let myArrowFunc = (a, b, c, d) => a + b + c + d;

let y = myArrowFunc(1, 2, 3, 4);
console.log(`y : ${y}`);

let inCreaseByFive = (num) => num + 5;
console.log(inCreaseByFive(3));

let calcInternet = (balance, rate) => {
	//do some task
};
