const tasks = [
	{ id: 1, name: 'Fishing' },
	{ id: 2, name: 'Shopping' },
	{ id: 3, name: 'Swimming' },
];
// input id Newname
// input newArray of todo
function updatetask(id, newName) {
	const newtask = tasks.slice[0]; // clone

	let foundindex = newtask.findIndex((item) => item.id === id);
	if (foundindex !== -1) {
		newtask.splice(foundindex, 1, { id: id, name: newName });
	}
	return newtask;
}

const newtodos = updatetask(2, 'Football');
console.log(newtodos);
