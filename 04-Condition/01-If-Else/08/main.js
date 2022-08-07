// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรด
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F

let score = prompt('put your score');
if (score <= 100 && score >= 80) {
	alert('Grade A');
}
if (score <= 79 && score >= 70) {
	alert('Grade B');
}
if (score <= 69 && score >= 60) {
	alert('Grade C');
}
if (score <= 59 && score >= 50) {
	alert('Grade D');
} else if (score <= 50) {
	alert('Grade F');
}
