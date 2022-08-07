// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array
let arr = [];
let result = 0;
let sum = 0;
do {
	result = prompt('input');
	if (result != null && !isNaN(result) && result != '' && result.trim() != '') {
		arr.push(result);
		sum = +result + sum;
	}
} while (
	result != null &&
	!isNaN(result) &&
	result != '' &&
	result.trim() != ''
);
console.log(sum); //?
