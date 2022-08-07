// ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin

let guest = 'Jane';
let admin = 'Pete';
let newName = ['Jane', 'Pete'];
[newName[0], newName[1]] = [newName[1], newName[0]];
console.log(newName); //?
