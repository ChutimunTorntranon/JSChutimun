// ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้

// - หาผลรวมตัวเลขทุกตัว
// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

a = 0;
odd = 0;
even = 0;
c2 = 0;
c3 = 0;
aa = 0;

for (let i = 1; i <= 100; i++) {
	a = a + i;

	if (i % 2 == 0) {
		even = even + i;
		c2 = c2 + i ** 2;
	} else if (i % 2 !== 0) {
		odd = odd + i;
	}
	if (i % 3 == 0) {
		c3 = c3 + i ** 2;
	}
	aa = c2 - c3;
}

console.log(`all even number ${a}`);
console.log(`even number${even}`);
console.log(`odd number${odd}`);
console.log(`last sum number${aa}`);
