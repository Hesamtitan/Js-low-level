// let name = prompt("enter you name");
// let age = prompt("enter your age");
// let isAdult = true;
// console.log("Wellcome" + " " + name);
// console.log("your age" + " " + age);
// console.log(isAdult);

//_____________________________________________________________________
//if
// let firstName = prompt("Enter your name");
// if (firstName.toLowerCase() == "Hesam".toLowerCase()) {
//   alert("Wellcome hesam");
// } else if (firstName.toLowerCase() == "Ali".toLowerCase()) {
//   alert("Wellcome Ali");
// } else {
//   alert("Wellcom User");
// }
//_____________________________________________________________________
//switch

// let firstName = prompt("Enter your name");
// switch (firstName.toLowerCase()) {
//   case "Hesam".toLowerCase():
//     alert("Wellcome Hesam");
//     break;
//   case "Ali".toLowerCase():
//     alert("Wellcome Ali");
//     break;
//   default:expression
//     alert("Wellcome");
//     break;
// }
// _____________________________________________________________________
// ternary
// let firstName = prompt("Enter your name");

// firstName.toLowerCase() == "Hesam".toLowerCase()
//   ? alert("Wellcome Hesam")
//   : alert("Wellcome");
// _____________________________________________________________________
//function

// function add(a, b) {
//   //   console.log(a + b);
//   return a * b;
// }
// let x = add(2, 5);
// console.log(x);
// console.log(add(55,10));
// add(4, 5);
// add(10, 2);
// add(25, 6);
// add(41, 15);
// add(40, 50);
// console.log(x);
// _____________________________________________________________________
//IIFE
// (function (a, b) {
//   console.log(a + b);
// })(5, 17);

// _____________________________________________________________________
//arrow function

// let arrow = (a, b) => {
//   return a + b;
// };
// let sum = arrow(15, 3);
// console.log(sum);
// _____________________________________________________________________
// array

let number = [1, 2, 3, 4, 5];
let strings = ["hi", "hellow", "by"];
let booleans = [true, true, false, false];
let other = [1, 2, "hi", "hellow", true, false, [10, 20, "by", false]];

console.log(number);
console.log(strings);
console.log(booleans);
console.log(other);
