// - จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ
// หากในข้อความนั้นมีคำว่า xxx, sex, porn
// ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
// - ให้ตรวจสอบแบบ case-insensitive
// เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ
// 		xxx, porn, sex ตามลำดับ

function CheckBrowser(str) {
	let lowerStr = str.toLowerCase();
	let isMatch =
		lowerStr.includes('xxx') ||
		lowerStr.includes('sex') ||
		lowerStr.includes('porn');

	return isMatch;
	// if (x == 'xxx' || x == 'sex' || x == 'porn') {
	// 	return true;
	// } else {
	// 	return false;
	// }
}

console.log(CheckBrowser('poRN'));
