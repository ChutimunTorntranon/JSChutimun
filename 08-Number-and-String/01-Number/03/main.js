// จงเขียนฟังก์ชันในการคำนวณแต้มจากยอดซื้อขาย โดยทุกยอดซื้อ 100 บาท
//จะได้ 1 แต้ม หากคำนวณแล้วได้แต้มไม่เป็นจำนวนเต็มให้ปัดเศษลง

function Rounding(sell) {
	let point = Math.floor(sell / 100);
	return point;
}

console.log(Rounding(6900));
console.log(Rounding(5000));
