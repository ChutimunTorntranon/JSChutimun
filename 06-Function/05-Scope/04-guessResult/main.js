let x = 1;
function func() {
	console.log(x); // * 1 // undefined
	let x = 2;
}
func();
