// จงเขียนฟังก์ชัน ucFirst(str)
// เพื่อแปลงตัวอักษรตัวแรกของ str
// ให้เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรที
// ่เหลือให้มีขนาดเหมือนเดิม

function ucFirst(str) {
	firsttype = str[0];
	let firstChar = str.slice(0, 1);
	let leftString = str.slice(1);

	return firstChar.toUpperCase() + leftString;
}

console.log(ucFirst('chutimun'));
