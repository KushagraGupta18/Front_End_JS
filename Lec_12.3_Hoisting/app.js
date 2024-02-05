


// var a=20;
// function meraFunc(){
//     console.log("inside mera function");
// }
// console.log(a);
// meraFunc();

//output--->
// 20
// inside mera function








//Hoisting--->when you access a variable/function even before its declaration that concept is called hoisting
//before executing all variables and functions are stored in memory creation phase thats why by consoling ';a' without declaring it. gives undefined

// console.log(a);//accessing a variable
// meraFunc(); //accessing a function
// function meraFunc(){    //declaring a function
//     console.log("inside mera function");
// }
// var a=20;   //declaring a variable

//output-->
// undefined
// inside mera function






//output based question

// var a=10;
// kush();
// function kush(){
//     console.log(a);
//     console.log('inner function');
// }
// console.log(a)





//in the case of let and const hoisting occurs but in dead temporal zone.
//DTZ(dead temporal zone)---->we cant accessing a  variables before initializing it in dead temporal zone(this happens in the case of let and const)
console.log(a)
kush();
function kush(){
    console.log(a);
    console.log('inner function');
}
let a=10;
