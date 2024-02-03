
// // function defintion
// function fun() {
//     console.log('Hello fron function fun');
// }

// // function call
// fun();


// function add(x, y, z) {
//     console.log(x + y + z);

//     return x + y + z;
// }

// const ans = add(2, 3, 4);
// console.log(ans);


// function subtract(a, b=2,c) {
    
//     return a - b - c;
// }

// const res = subtract(10, 4);
// console.log(res);



// function add(x, y) {
//     return x + y;
// }

// console.log(add(2, 3));
// console.log(add('Hello', 'World'));
// console.log(add(10, 'Hello'));
// console.log(add(true, 10));
// console.log(add(false, 'Hello'));
// console.log(add("", 10));
// console.log(add([], 15));

// functional expression 
// const f = function fun() {
//     console.log('Inside fun');
// }

// Anonymous function as function expression
// const f = function() {
//     console.log('Inside fun');
// }

// console.log(f);
// f();

// --------------------------------------------

// var x = 100;

// function fun() {
//     var y = 99;
//     console.log('Inside fun');
//     console.log(y);
// }

// console.log(x);
// fun();


// ----------------------------------------------


// console.log(a);

// b();


// function b() {
//     var c = 87;
//     console.log(c);
// }


// var a = 100;


// ----------------------------------------------------


// console.log(a);

// function b() {
    
//     c();

//     var d = 9999;

//     function c() {
//         console.log(d)
//     }

// }
// b();

// var a = 100;




//sam

//function definition/declaration
function sum(){
    let a=10;
    let b=20;
    console.log(a+b);
}
//function calling
sum();//we can call this func multiple times
console.log(sum());//it will print undefined also because function is not returning anything.


//parameterised function(when we call the function and pass the arguement and call the variable in parameter)
function hello(num3){//num3 is my parameter . no need to define the parameter
    let num1=10;
    let num2=20;
    console.log(num1+num2+num3);
}
hello(20);      //20 is an arguement
hello(100);



function sum2(){
    let num1=10;
    let num2=20;
    return (num1+num2);
}
console.log(sum2());


//multiple parameter
function kush(num1, num2){
    return (num1+num2);
}
console.log(kush(10,20));

function kush(num1, num2){
    return (num1+num2);
}
console.log(kush());        //it shows you Not a number


//nothig return and less arguement
function kush1(num1, num2){
    console.log(num1);//30
    console.log(num2);//undefined
}
console.log(kush1(30));//undefined




//default parameterised function
function kush3(num1,num2=40){
    console.log(num1);
    console.log(num2);
}
kush3(30);

function kush2(num1,num2=40){
    console.log(num1);
    console.log(num2);
}
kush2(30,50);
//if we  gave equal parameter for arguements then default value will be overwrite.
//num2--->50



function kush4(num1=40,num2){
    console.log(num1);
    console.log(num2);
}
kush4(30);//ordered of parameter is maintained. num1 will be overwrite num1--->30 and num2-->undefined




//Grade Calculator

function grade(num){
    if(num>80){
        return '0'
    }
    else if(num>60){
        return 'A'
    }
    else if(num>40){
        return 'B'
    }
    else if(num>20){
        return 'C'
    }
    else{
        return 'Fail'
    }
}
console.log(grade(90));
console.log(grade(10));
console.log(grade('kush'));//fail



//output type casting
function ki(num1,num2){
    return num1+num2;
}
let ans=ki(10,'kush')
console.log(ans);//10kush
//num1 is typecasted to string and then add to num2 so overall is string
console.log(typeof(ans));//string

 

function kool(num1,num2){
    return num1+num2;
}
let ki1=kool(10,true)//gives 11 because boolean(true) is type casted to Number(1) and add to num2  and overall type is Number
console.log(typeof(ki1));//number




//function expression
//whenever i store the entire function inside a variable then it is called functional expression and first class expression and first class citizen.
let fun=function iphone(){
    return ('hi iphone')
}
// iphone();//it will give error now(iphone is not defined)

console.log(fun);
console.log(fun());



//how are the function run behind the scene?
//whenever the js code is run a global execution context is created.


