function getUserData({ firstName, favoriteColor = 'green' }) {
	return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // * //?
// ถูกเปลี่ยนค่าและ๔ุกเพิ่มค่า ใน object : key  Your name is  alejandero and you like purple
console.log(getUserData({ firstName: 'Melissa' })); // ** //? เปลี่ยนค่า value ใน object key เป็น melissa
console.log(getUserData({})); // *** //? เปิดใช้ฟังชั่น แต่ไม่ได้ใส่ key และ value ทำให้ไม่แสดง
