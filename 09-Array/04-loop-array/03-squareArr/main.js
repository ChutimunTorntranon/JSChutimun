const array = [2, 3, 5, 7, 11];
squareArr(arr); // [4, 9, 25, 49, 121]
const resultArr = [];

function squareArr(arr) {
	arr.forEach((item) => {
		let squreNum = item ** 2;
		resultArr.push(squreNum);
	});
	return resultArr;
}
// const arr = [2, 3, 5, 7, 11];
console.log(squareArr(arr));
