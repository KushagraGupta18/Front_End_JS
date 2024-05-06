let arr=[1,2,3,4,5];//array in js

console.log(arr);
console.log(arr[3]);
console.log(arr[31]);//undefined

let arr2=[1,2,3,'kush','gupta','akshay',undefined, null, true];
console.log(arr2);
console.log(arr2.length);//arr.length is a property so we do not write paranthesis
// console.log(arr2.length());

let ans=console.log(arr2[4]);//we cant store print statement thats why ans is undefined
console.log(typeof(ans));//it will give undefined because we would not store the existence of console. console didn't return anything thats why ans is undefined


let ans1=arr2[4];
console.log(typeof(ans1));//string


// console.log(10) console.log(20)//it will give error beacause there is having only one executable statement in one line if we want to put two statements than we have to use semicolon after each statement
// console.log(10); console.log(20)//shi hai
// console.log(10)//shi hai


let arr3=[1,2,3,'kush','gupta','akshay',undefined, null,[10,'kushagra',30,[100,200,300]], true];
console.log(arr3[8][1]);//kushagra
console.log(arr3[8][3][0]);//100

