// - จากโค้ดด้านล่างให้เขียนคำสั่งเพื่อแปลง a, b และ c ให้เป็น Boolean แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
// - ให้ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f
// - ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร

// ```js
// let a = undefined;
// let b = " ";
// let c = !b;
// ```

let a = undefined;
console.log(Boolean(a)); //false
d = a;
console.log(d); // undefined
console.log(typeof d); //undefined

let b = ' ';
console.log(Boolean(b));
true;
e = b; // ' '
console.log(e); // ' '
console.log(typeof e); // string //true

let c = !b;
console.log(Boolean(c)); //false
f = c; // false
console.log(f); // false
console.log(typeof f); // boolean
