บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js // autoamtic semicolon insertion//
function getLongText() {
	return;
	('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
}

console.log(getLongText()); // undefined
```
