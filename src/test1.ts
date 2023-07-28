console.log("test1");
// annotations and signature [data type]
/*

1- annotation for variables
2- annotation for array
3- annotation for function

*/
// annotation variables
let user: string = "kareem";
let number: number = 100;
let bool: boolean = true;
let all: any = "hello my friend";
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
function add(num1: number, num2: number) {
    return num1 + num2;
}
console.log(add(10, 20));
let friends: string[] = ["osama", "sayed", "amer"];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].repeat(3));
}
let arrOne: number[] = [10, 20, 30, 40, 50];
let arrTwo: string[] = ["a", "b", "c", "d", "e"];
let arrThree: boolean[] = [true, false, true];
let arrFour: (string | number | boolean)[] = ["a", 10, true];
let arrFive: (string | number | boolean | string[] | number[])[] = ["a", 10, true, [10, 20, 30], ["a", "b", "c"]];
// annotation function
/*
1- noimpilicitany 
2- noimpilicitreturns
3- nounusedlocal
4- nounusedparameter
*/
let connect = true;
function Details(name: string, country: string, salary: number) {
    let test = 10;
    if (connect) {
        return `hello ${name} , your country is ${country} and your salary is ${salary} and test is ${test}`;
    }
    return "not";
}
console.log(Details("sayed", "Egypt", 7000));
// optional parameter
function getData(name?: string, country?: string, salary?: number) {
    return `hello ${name} , your country is ${country} and your salary is ${salary}`;
}
console.log(getData());
function addNums(...nums: number[]): number {
    let result = 0;
    nums.forEach((num) => {
        result += num;
    });
    return result;
}
console.log(addNums(10, 20, 30, 40, 50, 10.5, 10.7, 9.99, +true));
/*
what is difference between static typed languages and dynamic typed languages
1- static typed languages like [c,c++,rust].
2- detect errors in development or compile time.
3- when declare variables you can not change data type.
4- performance and fast is better as checking occure in compile not run time.
5- there is a static type check in compile time to know data type.
////////////////////////////////////////////////////////////////////////////////////////////////
1- dynamic typed languages like [python,javascript,php].
2- detect errors in run or excutation time.
3- when declare variables you can change data type.
4- performance and fast is not better as checking occure in run time.
5- there is a dynamic type check in run time to know data type.
*/
