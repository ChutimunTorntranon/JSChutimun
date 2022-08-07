// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย
const THE_SENTINEL = 'stop';

function Fruitbasket() {
	const result = {};
	do {
		key = prompt('Fruit');
		value = prompt('enter value');
		if (value > 1) {
			key = key + 's';
		}
		key !== THE_SENTINEL && value !== THE_SENTINEL;
		result[key] = value;
	} while (key !== THE_SENTINEL && value !== THE_SENTINEL);
	if (key == THE_SENTINEL) {
		delete result.THE_SENTINEL;
	}
	return result;
}

let userCreateObject = Fruitbasket();
console.log(userCreateObject);
