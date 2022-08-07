// - จงเขียนโค้ดเพื่อรับ input
// - ถ้า input = 1 ให้ alert “One”
// - ถ้า input = 0 ให้ alert “Zero”
// - ถ้า input = -1 ให้ alert “Minus zero”
// - ถ้าไม่ใช่ค่าที่กล่าวมาให้ alert “Invalid number”
// - ให้เขียนโดยใช้ switch case

let number = prompt('input');
if (number === null || number.trim() == '' || isNaN(number)) {
	alert('Invalid Number');
} else {
	switch (+number) {
		case (number = 1):
			alert('One');
			break;
		case (number = 0):
			alert('Zero');
			break;
		case (number = -1):
			alert('Minus Zero');
			break;
	}
}
