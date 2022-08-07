// จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
// - netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)

function calsummary(salesArray) {
	const summaryArray = [];

	for (let item of salesArray) {
		let currentObj = {};

		let netPrice = 0;
		if (item.discount) {
			let netPrice = item.Price - item.Price * item.discount;
		} else {
			netPrice = item.price;
		}

		currentObj.netPrice = netPrice;

		summaryArray.push(currentObj);
	}

	return console.log(summaryArray);
}

const sales = [
	{ price: 1000, discount: 0.1 },
	{ price: 500, discount: 0.05 },
	{ price: 100 },
];
const summary = [{ netPrice: 900 }, { netPrice: 475 }, { netPrice: 100 }];

console.log(calsummary(sales));
