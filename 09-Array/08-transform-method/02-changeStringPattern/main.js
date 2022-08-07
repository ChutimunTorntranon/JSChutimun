// จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ
// dash-separated เช่น background-color
// ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor
// let dash = 'background-color';
// let text = dash.split('-');
// console.log(text); //?
// let text2 = text.join('');
// console.log(text2);
// let text3 = text[1][0].toUpperCase(); //?
// text[0] + text3 + text[1].slice(1); //?
function camelCase(text) {
	let text2 = text.split('-'); //?
	text2[1][0].toUpperCase(); //?
	text5 = text2[0] + text2[1][0].toUpperCase() + text2[1].slice(1); //?

	return text5; //?
}

camelCase('Chutimun-torntranon'); //?
