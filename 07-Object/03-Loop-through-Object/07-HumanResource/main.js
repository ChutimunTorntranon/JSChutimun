// ให้รับข้อมูลเป็นชื่อพนักงาน
// - หากมีพนักงานที่ชื่อตรงกับคีย์ในอ็อบเจ็คด้านล่างให้แสดงข้อความว่า
// Name: john, salary: 1000, address: Ratchathewi, Bangkok หากไม่มีชื่อแสดงข้อความว่า Not Found

const employees = {
	john: {
		salary: 1000,
		address: { district: 'Ratchathewi', province: 'Bangkok' },
	},
	peter: {
		salary: 1500,
		address: { district: 'Pathumwan', province: 'Bangkok' },
	},
	mike: {
		salary: 800,
		address: { district: 'Pakkret', province: 'Nonthaburi' },
	},
	sarah: {
		salary: 2200,
		address: { district: 'Sriraja', province: 'Chonburi' },
	},
};
let x = 'john';
// console.log(employees[x]['salary']);
// console.log(employees.mike.address.province);
// console.log(`Name: ${x},salary:${employees[x]['salary']['address']}`);
console.log();

function checkobject(y) {
	for (key in employees) {
		if (y == key) {
			console.log(
				`Name: ${y},salary:${employees[y].salary},address:${employees[y].address.district},${employees[y].address.province}`
			);
		} else console.log('Not found');
	}
}
checkobject('peter'); //?
