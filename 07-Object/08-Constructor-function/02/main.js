// ให้สร้าง Constructor Function: Accumulator(startingValue)
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม
//(มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า
// currentValue
// -  มี method  show() ให้ alert ค่า currentValue

function Accumulator(startingValue) {
	this.currenValue = startingValue;
	this.read = function () {
		this.num = +prompt('input');
		this.currenValue += this.num;
	};
	this.show = function () {
		alert(this.currenValue);
	};
}
let x = new Accumulator(5);
x.read();
x.read();
console.log(x.show());
console.log(Accumulator(x));

console.log(x);
