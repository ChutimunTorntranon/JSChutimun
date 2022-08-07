// username  === ' ' ==> "username is required"
// password  === ' ' ==> "password is required"
// username === 'admin' &&  password = "1234" alert "Hello admin"
// username === 'john' && password = "qwerty" alert "Hello john"

let username = prompt('username');
let password = prompt('password');

// user not put in username
if (username === null || username.trim() === '') {
	alert('username is required');
	if (password === null || password.trim() === '') {
		alert('password is required');
	}
} else if (password === null || password.trim() === '') {
	alert('password is required');
} else {
	if (
		(username === 'admin' && password === '1234') ||
		(username === 'john' && password === 'qwerty')
	) {
		alert(`Hello,${username}`);
	} else {
		alert('Invalid username or password');
	}
}
