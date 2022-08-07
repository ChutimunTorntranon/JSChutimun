// // จงเขียนฟังก์ชัน filterRange(arr, a, b)
// เพื่อ return array ที่ประกอบด้วย element ของ
// arr ที่มีค่าอยู่ระหว่าง a กับ b

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterRange(array, lowerBound, UpperBound) {
	const resultArr = array.filter(
		(item) => item >= lowerBound && item <= UpperBound
	);
	return resultArr;
}
filterRange(arr, 3, 4); //?
