// - จงเขียนฟังก์ชัน copySorted(arr) เพื่อ return array
// ที่เรียงข้อมูลใน arr จากน้อยไปหามาก โดยที่ arr ต้องมีค่าเหมือนเดิม
// - ตัวอย่างผลลัพธ์

let arr = ['React', 'Vue', 'Angular'];

function copySorted2(array) {
	const clone = array.slice();
	return clone.sort();
}

let sort = copySorted2(arr); //?
console.log(); //?
//ยังผิดอยู่
