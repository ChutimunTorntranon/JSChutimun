// //ให้สร้าง array resul ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

// const array = [9, 17, 23, 5];
// // ค่าที่มากกว่า 10
// const resultNum = arrayNum.filter(function (item, index, arr) {
// 	if (item > 10) {
// 		return true; // เอา item นั้น
// 	} else {
// 		return false; // ไม่เอ่า item
// 	}
// });
// console.log(resultNum);

// const arrayInt = [1, 2, 3, 4];
// // // ค่าที่เป็นเลขคี่
// const resultInt = arrayInt.filter(function (item, index, arr) {
// 	if (item % 2 !== 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// const arrayMix = [1, '1', 2, {}];
// // // ค่าที่ประเภทข้อมูลเป็น Number
// const resultMix = arrayMix.filter((item) => typeof item == 'number');
// console.log(resultMix);

// const arrayfruits = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// // // ค่าที่มีตัวอักษรมากกว่า 6 ตัว
// const resultfruits = arrayfruits.filter((item) => item.length > 6);
// console.log(resultfruits);

// // const array = [1, -3, 2, 8, -4, 5];
// // // ค่าที่เป็นเลขบวก

// // const array = [1, 3, 4, 5, 6, 7, 8];
// // // ค่าที่หาร 3 ลงตัว

// const arrayAnimals = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// // // ค่าที่ขึ้นต้นด้วยตัว E
// const resultAnimals = arrayAnimals.filter(function (item, index, arr) {
// 	if (item.startsWith('E')) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// const arrayMixCaseFruit = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// const resultMixCaseFruit = arrayMixCaseFruit.filter(item =>{
//     if (item == item.toUpperCase()){
//         return true

//         } else{
//             return false
//         }
//     }
// })
// const arrayProvince = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// // // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
// const resultProvince = arrayProvince.filter(item => item.toLowerCase().includes())



// // const arrayPerson = [
// //   { name: 'Ben', age: 14 },
// //   { name: 'Phil', age: 18 },
// //   { name: 'John', age: 32 },
// //   { name: 'Ann', age: 16 },
// //   { name: 'Paul', age: 24 }
// // ];
// // // // อายุไม่น้อยกว่า 18
// // const resultPerson = arrayPerson.filter(item => itemm.)
// // const array = [
// //   { id: 1, name: 'Pepsi' },
// //   { id: 2, name: 'Mirinda' },
// //   { id: 3, name: 'Coke' },
// //   { id: 4, name: 'Fanta' },
// //   { id: 5, name: 'Sprite' }
// // ];
// // // // id ไม่เท่ากับ 4
// const array = [
//       { name: 'John', birth: '2001-07-31' },
//       { name: 'Jack', birth: '1990-06-24' },
//       { name: 'Jim', birth: '1984-12-13' },
//       { name: 'Jeff', birth: '1996-02-05' },
//       { name: 'Joe', birth: '2002-06-13' }
//     ];
//     // // เกิดเดือน 6
    
//     const resultArray = array.filter(item => {
//         let month = item.birth.slice(5,7)
//         if(month == '06'){
//             return true
//         }else{
//             return false
//         }
//     })
// console.log(resultArray)

const arrayNum = [9, 17, 23, 5];
// ค่าที่มากกว่า 10
const resultNum = arrayNum.filter(function(item,index,arr){

    if(item > 10){
        return true
    }else{
        return false
    }
}) 
console.log(resultNum)
const arrayInt = [1, 2, 3, 4];
// ค่าที่เป็นเลขคี่
const resultInt = arrayInt.filter(function(item,index,arr){

    if(item %2 !== 0 ){
        return true
    }else{
        return false
    }
})
console.log(resultInt)

const arrayMix = [1, '1', 2, {}];
// ค่าที่ประเภทข้อมูลเป็น Number
const resultMix = arrayMix.filter((item)=>typeof(item)=='number')
console.log(resultMix)

const arrayFruits = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว
const resultFruits = arrayFruits.filter(item => item.length >4 )const arrayNum = [9, 17, 23, 5];
// ค่าที่มากกว่า 10
const resultNum = arrayNum.filter(function(item,index,arr){

    if(item > 10){
        return true
    }else{
        return false
    }
}) 
console.log(resultNum)
const arrayInt = [1, 2, 3, 4];
// ค่าที่เป็นเลขคี่
const resultInt = arrayInt.filter(function(item,index,arr){

    if(item %2 !== 0 ){
        return true
    }else{
        return false
    }
})
console.log(resultInt)

const arrayMix = [1, '1', 2, {}];
// ค่าที่ประเภทข้อมูลเป็น Number
const resultMix = arrayMix.filter((item)=>typeof(item)=='number')
console.log(resultMix)

const arrayFruits = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว
const resultFruits = arrayFruits.filter(item => item.length >4 )

const arrayNumPlus = [1, -3, 2, 8, -4, 5];
// ค่าที่เป็นเลขบวก
const resultNumPlus = arrayNumPlus.filter(item => item > 0)

const array6 = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว
result6 = array6.filter((item)=>item %3 == 0);
console.log(result6)
const array7 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// // ค่าที่ขึ้นต้นด้วยตัว E
result7 = array7.filter((item)>=item[0]== 'E');
console.log(result7)
const array8 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
result8 = array8.filter((item)=> item ==item.toUpperCase());
console.log(result8)
const arrayProvince = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
const resultProvice = arrayProvince.filter(item => item.toLowerCase().includes('buri'))
console.log(resultProvice)

const arrayAge = [
  { name: 'Ben', age: 14 },
  { name: 'Phil', age: 18 },
  { name: 'John', age: 32 },
  { name: 'Ann', age: 16 },
  { name: 'Paul', age: 24 }
];
// อายุไม่น้อยกว่า 18 
const resultAge = arrayAge.filter(item => item.age>18)
console.log(resultAge)

const arrayPerson = [
    { id: 1, name: 'Pepsi' },
    { id: 2, name: 'Mirinda' },
    { id: 3, name: 'Coke' },
    { id: 4, name: 'Fanta' },
    { id: 5, name: 'Sprite' }
  ];
  // id ไม่เท่ากับ 4
  const resultPerson = arrayPerson.filter(item => item.id !== 4 )
  console.log(resultPerson)
  
  const array = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' }
  ];
  // เกิดเดือน 6
  const resultArray = array.filter(item => {
      let month = item.birth.slice(5,7)
      if(month =='06'){
          return true
      }else{
          return false
      }
  })
  