// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด

let flattened = [
	[0, 1],
	[2, 3],
	[4, 5],
];
// expected result: [0, 1, 2, 3, 4, 5]
let result = flattened.reduce((sum, current) => sum.concat(current)); //.concat การเอา [1,1] [1,2] มาต่แกัน
console.log(result); //?

//function
// let flattenarray
//return acc.concat(item)
//
