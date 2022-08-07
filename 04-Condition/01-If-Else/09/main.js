// - เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
// - แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย
//   เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1

let result = prompt('input Number');
let result2 = prompt('input Number');
let result3 = prompt('input Number');
let x = result;
let y = result2;
let z = result3;

if (x <= y && y <= z) {
	alert(`${x},${y},${z}`);
} else if (x <= z && z <= y) {
	alert(`${x},${y},${z}`);
} else if (y <= x && x <= z) {
	alert(`${x},${y},${z}`);
} else if (y <= z && z <= x) {
	alert(`${x},${y},${z}`);
} else if (z <= x && x <= y) {
	alert(`${x},${y},${z}`);
} else if (z <= y && y <= x) {
	alert(`${x},${y},${z}`);
}
