บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const sender = 'Matt';

function sendTo(from, to) {
	console.log(`From ${from} to ${to}`);
}

sendTo(sender, 'Sarah'); // *  'From Matt to Sarah'
sendTo(null); // ** 'From null to undefined'
```

```js
const sender = 'Matt';

function sendTo(to, from = 'CC') {
	//'From CC to Max'
	console.log(`From ${from} to ${to}`); // 'From Jay to Ben'
}

sendTo('Max'); // ***
sendTo('Ben', 'Jay'); // ****
```
