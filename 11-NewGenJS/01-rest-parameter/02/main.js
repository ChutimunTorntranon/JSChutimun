// <!-- จงเขียนฟังก์ชัน filterOutOdds
// โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
// และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่ -->

function filterOutOdds(...sum) {
	let result = sum.reduce((sum, item) => {
		if (item % 2 == 0) {
			sum.push(item);
		}
		return sum;
	}, []);

	return result;
}

console.log(filterOutOdds(3, 5, 6, 10)); //?
