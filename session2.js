// console.log(2+2);

// /*
// mathematical operators and precedence
// Brackets(...) B
// Addition(+) A 
// Subtraction(-) S 
// Multiplication(*) M
// Division(/) D
// Modulus(Remainder) (%)

// Precendence (Order of evaluation)
// 1.B
// 2.D
// 3.M
// 4.R
// 5.A
// 6.S
// */

// console.log(2+(3*5)%9-10*5%5/(7/9));
// console.log(5*15);
// console.log(10%2);
// console.log(19-29);
// console.log('Java'+'Script');
// console.log('JS'/4); // NaN -> Not a number
// console.log(3+10*2);
// console.log((3+10)*2);

// console.log(typeof('JS'/4)); // datatype of NaN -> Number
// console.log(4/0); // Infinity
// console.log(-4/0);
// console.log(typeof(-4/0));

// // expression -> combination of literals, variables , operators and other simple expressions.

// // Relational Operators -> > , < , >= , <= , === , !==
// console.log(5<7);
// console.log(5>7);
// console.log(5<=7);
// console.log(5>=7);
// console.log(5===7); // strict equality
// console.log(5=='5'); // non-strict equality
// console.log(5==='5'); // strict equality -> checks value as well as the data type
// console.log(5!==7);
// console.log(5!='5');
// console.log(5!=='5');

// // Logical Operators

// // 1. AND (&&)

// let age = 22;
// let degCertificate = 1;
// console.log(age>=21 && degCertificate>2);

// // 2. OR (||) 

// console.log(age>=21 || degCertificate>2);

// // 3. NOT (!)

// console.log(!true);
// console.log(!false);

// console.log(!(8==9));
// console.log(!'False'); // string is truthy value , not of true will be false

// let a = 10;
// let b = 20;
// console.log(a!==b && a>b); // true and false -> False
// console.log(a!==b || a>b); // true or false -> True

// if-else

// let age = 16;

// if(age>=18){
//     console.log("Congratulations, you are eligible to vote");
// }
// else {
//     console.log("Sorry, not eligible to vote");
// }

// let marks = 94;

// if(marks>=91 && marks<=100) {
//     console.log('A1');
// }
// else if(marks>=81 && marks<=90) {
//     console.log('A2');
// }
// else if(marks>=71 && marks<=80) {
//     console.log('B1');
// }
// else
// {
//     console.log('Remaining Grade!');
// }

// let number = 0;

// if(number>0) {
//     console.log("The given number is positive");
// }
// else if (number < 0) {
//     console.log("The given number is negative");
// }
// else{
//     console.log("The given number is zero");
// }

// function myName() {
//     console.log('Soham');
// }

// myName();
// myName();
// myName();

// function calculatePercentage(a,b,c,d,e) {
//     const result = ((a+b+c+d+e)/500);
//     return result;
// }

// let vanshitaMarks = calculatePercentage(1,2,3,4,5);
// console.log(vanshitaMarks);

// function add(a,b){
//     return a+b;
// }

// function oddEven(a,b){
//     if(a%2==0 && b%2==0){
//         return "Both are Even numbers";
//     }
//     else if(a%2==0 && b%2!==0) {
//         return "Number1 is Even but Number2 is not";
//     }
//     else{
//         return "Number1 is Odd but Number2 is even";
//     }
// }

// let a_result = oddEven(1,6);
// console.log(a_result);

// // non parameterised function 

// function funcName () {
//     console.log("vanshita");
// }

// funcName () ; // function call -> will always be outside the function

// parameterised function 

// function addNumber(a,b) {
//     return a+b;
// }

// vanshitaMarks = addNumber(100,200);
// console.log(vanshitaMarks);
// let sohamMarks = addNumber(32,451);
// console.log(sohamMarks);

function multiply(x,y){
    return x*y;
}

let multiply1 = multiply(10,20);
console.log(multiply1);