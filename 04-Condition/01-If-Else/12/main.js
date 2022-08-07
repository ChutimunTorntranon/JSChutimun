// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรดในรูปแบบ Ternary Operator
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F

let num = prompt('Input score');
let score = +num;
let message;

if (num === null || num.trim() == '' || isNaN(num)) {
	alert('Please enter valid score');
} else {
	message =
		score >= 80
			? 'Grade A!'
			: score >= 70
			? 'Grade B!'
			: score >= 60
			? 'Grade C!'
			: score >= 50
			? 'Grade D!'
			: 'Grade F!';
	alert(message);
}
