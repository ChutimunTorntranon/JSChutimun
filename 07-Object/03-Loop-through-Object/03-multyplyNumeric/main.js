//ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object
//คูณเฉพาะ value ที่เป็น number เท่านั้น

// before
// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: 'My menu',
// };

// after call function multiplyNumeric(menu, 3)
// menu = {
// 	width: 600,
// 	height: 900,
// 	title: 'My menu',
// };

let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

let = multiplyNumeric = function (object, num) {
	for (let key in object) {
		if (object[key] !== isNaN) {
			object[key] *= num;
		}
	}
};
console.log(multiplyNumeric(menu, 3));
console.log(menu);
