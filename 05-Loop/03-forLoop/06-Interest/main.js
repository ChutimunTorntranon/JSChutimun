//balance = 100,000
//newbalance= 100,000 + interrest
//balance = 100,000 + 100,000 +(2.5/100) = 100,000 + 2500
let balance = 100000;
for (let i = 0; i < 100; i++) {
	balance = balance + balance * (2.5 / 100);
}
console.log9(balance);
