// // ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า
// และเก็บไว้ในตัวแปร username, email และ password
// // ให้สร้าง object user ที่มี property 3 อันคือ
// username, email และ password โดยให้แต่ละ property
// มีค่าตามตัวแปรที่รับมา

let x = prompt('Input Username');
let y = prompt('Input Email');
let z = prompt('Input Password');

const user = {
	username: x,
	email: y,
	password: z,
};

console.log(user);
