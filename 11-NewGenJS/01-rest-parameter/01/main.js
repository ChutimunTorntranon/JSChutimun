// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข
// โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
function numCal(...sum) {
	let result = sum.reduce((sum, item) => sum * item, 1);
	for (let result of sum) result *= sum;
	return result;
}
console.log(numCal(2, 2, 2)); //?
