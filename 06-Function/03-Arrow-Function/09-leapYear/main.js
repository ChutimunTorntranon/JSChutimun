// ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year
// - leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว
// - ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว

let leap = (num) => {
	if (num % 100 == 0) {
		if (num % 400 == 0) {
			return true;
		} else {
			return false;
		}
	}
};

console.log(leap(400));
