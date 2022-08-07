// - จากโค้ดด้านล่างให้เขียนคำสั่งเพื่อแปลง a, b และ c ให้เป็น Number แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
// - ให้ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f
// - ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร

// ```js
// let a = undefined;
// let b = null;
// let c = b + "4 2";
// ```

let a = undefined;
console.log(typeof a); // undefined
d = Number(a); //NAN
console.log(d); //NAN
console.log(typeof d); // Number

let b = null;
console.log(typeof b); //object
e = Number(b); // 0
console.log(e); // 0
console.log(typeof e); // number

let c = b + '4 2';
console.log(typeof c); // string
e = c * 1; //NAN
console.log(e); // NAN
console.log(typeof e); // number

// ข้อสามไม่ชัวรอดูคำตอบอีกที
