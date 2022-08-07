// let arr = [1,2,3,4,5];
// function cloneArr(arr){
//     return arr
// }
// console.log(arr)
// console.log(cloneArr(arr))

let arr = [1, 2, 3, 4, 5];

function clone(arr) {
	return arr.slice();
}
const newArr = clone(arr);
console.log(newArr);
