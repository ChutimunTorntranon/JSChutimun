// ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

function isEmptyObject(object) {
	// เข้า for loop สำหรับมี 1 key+
	for (let key in object) {
		return false;
	}
	return true;
}

const user1 = {
	name: 'cc12',
};
const user2 = {
	name: 'CC14',
	cohort: 12,
};

const user3 = {};

console.log(isEmptyObject(user1)); // false
console.log(isEmptyObject(user2)); // false
console.log(isEmptyObject(user3)); // true
console.log(isEmptyObject({ name: 'CC12' }));
