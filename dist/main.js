function add(num1,num2){
    return num1 + num2;
}
console.log(add(10,20));
function getData(name,country = "un",salary = "un"){
    return `hello ${name} , your country is ${country} and your salary is ${salary}`;
}
console.log(getData("sayed","egypt",7000));
function addNums(...nums) {
    let result = 0;
    nums.forEach((num)=>{
         result += num;
    });
    // for(let i=0;i<nums.length;i++){
    //     result += nums[i];
    // }
    return result;
    }
    console.log(addNums(10,20,30,40,50,10.5,10.7,9.99));
