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
// [array]

// let number = [1, 2, 3, 4, 5];
// let strings = ["hi", "hellow", "by"];
// let booleans = [true, true, false, false];
// let other = [1, 2, "hi", "hellow", true, false, [10, 20, "by", false]];

// console.log(number);
// console.log(strings);
// console.log(booleans);
// console.log(other);
// _____________________________________________________________________
// [array-methods]

// let number = [1, 2, 3, 4, 5];
// let number2 = [6, 7, 8, 9, 10];

// number.push(["hello"], 2);
// number.pop();
// number.unshift(0, 5, "hi");
// number.shift()
// console.log(number);

// number.push(number2);
// number.push(...number2);

// console.log(number);
// _____________________________________________________________________
//{object}
// let person = { name: "hesam", age: 34 };
// let person = {
//   name: "hesam",
//   birthday: 1989,
//   getAge: function () {
//     return 2023 - this.birthday;
//   },
// };
// console.log(person.getAge());

// let person = {
//   name: "hesam",
//   birthday: 1989,
//   child: ["soheil"],
//   parents: {
//     father: "x",
//     mother: "y",
//   },
//   getAge: function () {
//     return 2023 - this.birthday;
//   },
// };
// console.log(`Name is : ${person.name}`);
// console.log(`Birthday is : ${person.birthday}`);
// console.log(`Childe name is : ${person.child[0]}`);
// console.log(`father name is : ${person.parents.father}`);
// console.log(`your age is : ${person.getAge()}`);
// _____________________________________________________________________
// loop for

// function sayhello() {
//   console.log("hello");
// }

// for (let i = 0; i < 5; i++) {
//   sayhello();
// }

// let loop = function sayhello() {
//   console.log("hi");
// };
// for (let i = 0; i < 3; i++) {
//   loop();
// }

// let numbers = [2, 6, 5, 48, 78];
// let i = 0;
// for (; i < 9; i = i + 2) {
//   console.log(i);
// }
// console.log(numbers);

// let numbers2 = [1, 5, 15, "ali", "wellcome"];

// for (let i = 0; i < numbers2.length; i++) {
//   console.log(numbers2[i]);
// }
// _____________________________________________________________________
//loop while
// let numbers = [-2,-1,0,1,3,4,5,6,7,8,9];
// numbers.push(15, 48, 25, 6987, 2);
// numbers.pop();
// numbers.shift();
// numbers.unshift(9, 7, "as", 4, 5);

// let i = 0;
// while (i < numbers.length) {
//   console.log(numbers[i]);
//   // i = i + 2;
//   i++
// }
// _____________________________________________________________________
//loop do-while

let num = [2, 4, 6, 8, 10];

let i = 0;
do {
  console.log(num[i]); //allways do this part of code//
  // i = i + 2;
  i++;
} while (i < num.length);
