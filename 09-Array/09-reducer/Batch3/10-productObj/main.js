// จงสร้าง object โดยมี key
// เป็น id ของ product และ value เป็น product name

const products = [
	{ id: 1, name: 'Crystal' },
	{ id: 4, name: 'Namthip' },
	{ id: 5, name: 'Nestle' },
];
typeof products; //?
// { 1: { name: 'Crystal' },
// 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };
products[0]; //?
// x.id; //?
// products[0].id; //?

// user[products[0].id] = {'name:': 'Crytal'};//?
// user[products[1].name] = {'name': 'Crytal'}
// user[products[0].id] = {}
// user['iphone'] = 5; //?
// console.log(user); //?

// let user = {};
// let user1 = {};
// user1['name'] = products[0].name; //
// console.log(user1);

// user[products[0].id] = user1;
// console.log(user);

function productall(user) {
	let obj = {};
	let obj2 = {};
	for (let i = 0; i < user.length; i++) {
		obj2['name'] = user[i].name; //?
		obj[user[i].id] = { ...obj2 };
	}

	return obj; //?
}
productall(products);
