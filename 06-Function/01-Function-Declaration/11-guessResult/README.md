บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function sayHi(age) {
	if (age < 12) alert('Hi kid');
}
console.log(sayHi); // f(sayhi)
console.log(sayHi(10)); // **undefined
```

```js
function sayHi(name) {
	if (name) {
		alert('Hi ' + name);
		return;
	} else {
		return 'Who are you';
	}
}
console.log(sayHi('John')); // undefined
console.log(sayHi()); // who are you
```
