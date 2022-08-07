function truncate(str, length) {
	if (str.length > length) {
		let font = str.slice(5, length - 1);
		return font;
	} else {
		return font;
	}
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
