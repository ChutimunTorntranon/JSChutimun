// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function
const isPrime = (num) => {
	let isPrime = true;

	for (let i = 2; i < num; i++) {
		if (num % 1 == 0) {
			isPrime = false;
			break;
		}
	}
	return isPrime;
};

console.log(7);
console.log(22);
