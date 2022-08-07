// จงเขียนฟังก์ชันในการสุ่มตัวเลข
// random(min, max)
// โดยให้ผลลัพธ์มีค่าเป็นจำนวนจริงตั้งแต่
// min ถึง max
// (ไม่รวม max)

// function maxrandom(x) {
// 	x = Math.random(x) * 15 * 1;
// 	return x;
// }

// function minrandom(y) {
// 	y = Math.random(y) * 12 * 1;
// 	return y;
// }

function MakeRandom(min, max) {
	let random = Math.random() * (max - min);
	random = random + min;
	return random.toFixed(1);
}
console.log(MakeRandom(2, 5));

MakeRandom(2, 5);
