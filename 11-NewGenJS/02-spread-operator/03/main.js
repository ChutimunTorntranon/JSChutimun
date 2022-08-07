// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1
// หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล,
// งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ rest operator

const name1 = function (firstname, lastname, ...hobby) {
	const result = {
		firstname,
		lastname,
		hobby: [...hobby],
		hobbytotal: [...hobby].length,
	};
	return result; //?
};

console.log(name1('jeffy', 'super', 'plane', 'playgame')); //?
