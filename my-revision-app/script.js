// // programming language : data types variables , functions , objects , array,  operators , control statements , map , filter

// var a = 45; // declaration is allowed

// console.log(typeof a);

// a = "rohit"; // re-assignment is allowed

// console.log(typeof a);

// var a = false; // re-declaration is allowed  {not recommended}

// console.log(typeof a);

// let b = 10; // declaration is allowed

// b = "sachin"; // re-assignment is allowed

// // let b = 'tendulkar' // re-declaration is not allowed

// const c = 18; // declaration is allowed

// //c = 'virat' // re-assignment is not allowed

// // const d ;

// // d = 'dhoni'  // const should must be intialize at the time of declaration

// // functions in JS

// // 1) normal function

// function greet() {
//   console.log("hello from greet...");
// }

// greet();

// function sum(a, b) {
//   return a + b;
// }

// // console.log(sum(10,3))

// // console.log(sum('10', 3))

// // console.log(sum('10', '3'))

// console.log(sum("a", "b"));

// function diff(a, b) {
//   return a - b;
// }

// console.log(diff(5, 2));

// console.log(diff("7", 3));

// console.log(diff("a", "b"));

// // 2) variable function

// let myName = function (name) {
//   console.log("Hello : ", name);
// };
// myName("tejas");

// // 3) arrow function

// let myCollege = (college) => {
//   console.log("my college ", college);
// };

// myCollege("TKA");

 let person1 = { age: 22, name: "raj", location: "pune" };

// console.log(person1);
// console.log(person1.age);
// console.log(person1.name);
// console.log(person1.location);

// //let arr1 = ['mango' , 34 , false , 324.23423 , "kiwi" , 'pune']

// // operators

// let num1 = 5;

// let num2 = "5";

// console.log(num1 == num2); // true
// console.log(num1 === num2); // false

// // in JS == checks & compare the value with not respect to data type
// // in JS === checks & compare the value with respect to data type

// // spread operator .. we will use it most of the time {form handling}\

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let merge = [arr1, arr2];

// console.log(merge);

// let merged = [...arr1, ...arr2, 7, 8, 9]; // length = 6 = [1,2,3,4,5,6]

// console.log(merged);

let person2 = { id: 101, age: 230, name: "tina", location: "Pune" };

// person2 = { ...person2, location: "Delhi" };

// console.log(person2);

 person2 = { ...person2, aadhar: "12345656789" };

// console.log(person2);

let all = [person1, person2];

let person3 = { age: 24, name: "jay", location: "delhi" };

 all = [...all, person3];

// console.log(all);

// // ternary operator : {conditional rendering}

// marks = 92;

// let grade =
//   marks >= 90
//     ? "A"
//     : marks >= 80
//       ? "B"
//       : marks >= 70
//         ? "C"
//         : marks >= 60
//           ? "D"
//           : "FAIL";

// console.log(grade);

// let status = true;

// let isActive = status ? "Online" : "Offline";

// console.log("isActive : ", isActive);

// let show = false;

// const showPassword = () => {
//   let p = document.querySelector("#pass");
//   let b = document.querySelector("#btn");

//   if (!show) {
//     p.type = "text";
//     b.value = "hide password";
//     show = true;
//   } else {
//     p.type = "password";
//     b.value = "show password";
//     show = false;
//   }

//   console.log("show function invoked...");
// };

// all 

for (const p of all) {
  
  console.log(p)  // readonly
}

console.log("----- by forEach ---------")

let dt = all.forEach((e)=>{
  //console.log(e)
})

console.log(dt)

console.log("----- by map ---------")
const newprs = all.map((pr)=> pr )  // returns the new array

console.log(newprs)

let n = [2,3,4,5]

let sqr = n.map((num) => num*num)
console.log(sqr)

let sqrr = [] ; 
for(let v of n){
    let num = v * v ; 
    sqrr.push(num)
}
console.log(sqrr)

let gt3 = n.map((num)=> num > 3)
console.log("by map : " ,gt3)

let gtt3 = n.filter((num)=> num > 3)

// array.filter( (element) => (condition))

console.log("by filter : " ,gtt3)


console.log(' ---- person deleted using filter()---- ')

 all = all.filter((element) => element.age <= 110)
 console.log(all)

 let deletedAge = 22 ; 

 all = all.filter((ele)=> ele.age !== deletedAge)

 console.log(all)












