// Object == Collection of key value
// Object Declaration 1

// const myObj = new Object();

// console.log(myObj);

//////////

const person = {
	firstName: 'John', //(value) property
	lastName: 'Doe', // (Value)
	age: 27,
	isAdmin: true,
	child: null,
	address: {
		road: 'Sukhumvit',
		provice: 'Bangkok',
	},
	sayHi: function () {
		alert('Hello');
	},
};

console.log(person.firstName);
console.log(person.address);
console.log(person.district); // undefined

person.firstName = 'Chutimun';
console.log(person.firstName);

person.age = 25 + 6;
console.log(person.age);

person.address.road = 'viphavadee';
console.log(person.address.road);

delete person.age;
console.log(person.age);

person.salary = 25000;
console.log(person);

person.age = 27;
console.log(person.age);

// square backet
console.log(person['firstName']);
// console.log(person[firstName]); // X

let a = 'age';
console.log(person(age)); //27
console.log(personal[a]); //27

person['graduate school'] = 'Codecamp';
console.log(person);

///////////

let username = 'CC12';
let lastname = '';
