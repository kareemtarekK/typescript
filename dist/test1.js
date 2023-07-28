"use strict";
console.log("test1");
// annotations and signature [data type]
/*

1- annotation for variables
2- annotation for array
3- annotation for function

*/
// annotation variables
let user = "kareem";
let number = 100;
let bool = true;
let all = "hello my friend";
all = 10;
all = true;
all = "user";
all = null;
// another way
let allVariables;
allVariables = "kareem";
allVariables = 10;
allVariables = true;
allVariables = null;
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
let friends = ["osama", "sayed", "amer"];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].repeat(3));
}
let arrOne = [10, 20, 30, 40, 50];
let arrTwo = ["a", "b", "c", "d", "e"];
let arrThree = [true, false, true];
let arrFour = ["a", 10, true];
let arrFive = ["a", 10, true, [10, 20, 30], ["a", "b", "c"]];
// annotation function
/*
1- noimpilicitany
2- noimpilicitreturns
3- nounusedlocal
4- nounusedparameter
*/
let connect = true;
function Details(name, country, salary) {
    let test = 10;
    if (connect) {
        return `hello ${name} , your country is ${country} and your salary is ${salary} and test is ${test}`;
    }
    return "not";
}
console.log(Details("sayed", "Egypt", 7000));
// optional parameter
function getData(name, country, salary) {
    return `hello ${name} , your country is ${country} and your salary is ${salary}`;
}
console.log(getData());
function addNums(...nums) {
    let result = 0;
    nums.forEach((num) => {
        result += num;
    });
    return result;
}
console.log(addNums(10, 20, 30, 40, 50, 10.5, 10.7, 9.99, +true));