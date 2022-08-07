// ให้เขียนโค้ดเพื่อหาผลรวมของเลขโดด
//  - รับค่าตัวเลขจากผู้ใช้งาน
//  - แสดงผลลัพธ์เป็นผลรวมของเลขแต่ละหลัก

let number = +prompt('Enter number');
let count = 0;

while (number) {
	let remainder = number % 10;
	number = (number - remainder) / 10;

	count++;
}
alert(count);
