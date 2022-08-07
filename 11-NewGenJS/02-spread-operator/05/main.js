// จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array
// และ return ค่าเป็น Array ที่มี element
// ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม

Math.random(); // [0,1]
arr = [1, 2, 3, 4, 5, 6]; //?
Math.random() * Array.length; //?
Math.floor(Math.random() * Array.length);

const removeRandom = (arr) => {
	const randomIndex = Math.floor(Math.random() * arr.length);
	arr.splice(randomIndex);
	return arr;
};

removeRandom(arr); //?
