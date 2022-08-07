// - จากโค้ดด้านล่างให้เขียนคำสั่งเพื่อแปลง a, b และ c ให้เป็น String แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
// - ให้ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f
// - ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร

// let a = undefined;
// let b = 2;
// let c = a++;

let a = undefined;
console.log(typeof a); //undefined
d = String(a); // undifined
console.log(typeof d); // String

let b = 2;
console.log(typeof b); // number
e = String(b); // 2
console.log(typeof e); // string

let c = a++;
console.log(typeof c); // number
f = String(c); //NAN
console.log(typeof f); //string
