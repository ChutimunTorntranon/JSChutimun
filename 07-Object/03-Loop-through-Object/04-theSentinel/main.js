// // ให้เขียนโปรแกรมที่รับค่า key และ value
// ของ Properties ของ Object หนึ่ง
// จนกว่าจะเจอคำว่า stop ถึงหยุด
// // และให้นำค่าเหล่านั้นมาสร้าง Object
// หลังจากนั้น log object นั้นออกมา

const The_Sentinel = 'Stop';
function createObjectFromInput() {
	const result = {};

	let key;
	let value;
	do {
		key = prompt('Enter Key');
		value = prompt('Enter Value');
		if (
			key !== null ||
			key.trim() !== '' ||
			(key !== The_Sentinel && value !== The_Sentinel)
		) {
			result[key] = value;
		}
	} while (key !== The_Sentinel || value !== The_Sentinel);

	return result;
}

let userCreateObject = createObjectFromInput();
console.log(userCreateObject);
