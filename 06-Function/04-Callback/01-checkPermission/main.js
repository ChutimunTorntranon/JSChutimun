// function cb1() {
// 	alert('ACCESS GRANTED');
// }

// function cb2() {
// 	alert('ACCESS DENIED');
// }

function checkPermission(role, cb1, cb2) {
	if (role == 'admin') {
		alert(cb1());
	} else {
		alert(cb2());
	}
}

// Callback when admin

let adMinExecute = function () {
	alert('ACCESS GRANTED');
};

let guestExecute = () => alert('ACCESS DENIED');
console.log(guestExecute(role));
