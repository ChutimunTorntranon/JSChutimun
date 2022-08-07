// function myNormalfunc() {
// 	return 5;
// }

// let result = myNormalfunc();
// console.log(result);

// // ต้นแบบ - prototype
// function Myconstructerfunc() {
// 	// same code
// }

// let instance = new myNormalfunc();

// function User(name) {
// 	//this == instance created by new keyword

// 	//step 1 : this = {}
// 	//step 2 : เพิ่ม property ให้  object this (s1)

// 	this.name = name;
// 	this.admin = true;
// 	this.address = '';
// 	this.sayhi = function () {
// 		alert('hello');
// 	};

// STEP 3 : RETURN THIS
//SUM : this == instance created by new keyword
// }
// create Instance from prototype
let User = new User('john');
console.log(User);

let user2 = new User('jeffy');
console.log(user2);

// alert(User.name); // john
// alert(User.isAdmin); // true

function CodecampStudent() {
	// S1 this = {}
	// S2 : defined property
	this.name = name;
	this.age = age;
}

let user1 = new CodecampStudent('game', 25);
