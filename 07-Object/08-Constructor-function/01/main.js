// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function ObjectCalculator() {
	this.read = function () {
		this.num1 = +prompt('input');
		this.num2 = +prompt('input');
	};
	this.sum = function () {
		alert(this.num1 + this.num2);
	};
	this.mul = function () {
		alert(this.num1 * this.num2);
	};
}

x = new ObjectCalculator('x');
console.log(x.read());
console.log(x.sum());
console.log(x.mul());
console.log(x);
