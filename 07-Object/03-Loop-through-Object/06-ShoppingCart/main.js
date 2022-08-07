// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น
// และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา
// ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)
const THE_SENTINEL = 'stop';
const cart = {};
function market() {
	cart.list = prompt('input list');
	cart.value = +prompt('input value');
	cart.price = +prompt('input price');
	cart.discount = +prompt('Code');
	if (cart.discount == 0) {
		delete cart.discount;
	}
}
function calculator(cart) {
	if (cart.discount) {
		cart.price = cart.price - cart.price * (cart.discount / 100);
		delete cart.discount;
	} else {
		cart.value * cart.price;
	}
}

market();
console.log(cart);
calculator(cart);
