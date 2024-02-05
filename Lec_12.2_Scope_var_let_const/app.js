
// let a = 10;
// let b = 20;

// {
//     let b = 500;
//     console.log(b);
// }

// console.log(b);



// var a = 100;

// if (a > 5) {
//     var a = 99;
//     console.log(a);
// }

// console.log(a);


// var a = 99;

// function b() {
//     var a = 88;
//     console.log(a);
// }

// b();

// console.log(a);


// Dead Temporal Zone

// console.log(a);

// b();

// function b() {
//     console.log('inside b');
// }


// let a = 200;



// a();

// var a = function b() {
//     console.log('Inside b')
// }















//sam

// (way of declaring a variable)
//1.  const   (No redeclare and no reassign to a constant variable)
const email="kush@gmail.com";
console.log(email);

//can we redeclare??--->No
// const email="kush12@gmail.com";//error
// console.log(email);

//can we reassign?--->No
// email="kush23@gmail.com";//error
// console.log(email);


// const naam;//error(Missing initializer in const declaration)
// naam="kush@gmail.com";
// console.log(naam);


//2. let (No redeclare but we can reassign to a let variables)

let var_name="kush gupta";
console.log(var_name);

//can i redeclare it??--->No
// let var_name="hello";//error
// console.log(var_name);

//can i reassign it?--->Yes
var_name="kush";
console.log(var_name);

let var_name1;//no error
var_name1=1000;
console.log(var_name1);


//3.var(redeclare and reassign are possible in the case of var variables)

var college=true;
console.log(college);


//can i redeclare it??--->Yes
var college='10000';
console.log(college);


//can i reassign it??-->Yes
college=90;
console.log(college);


var akshay=100; //no error
akshay=90;
console.log(akshay);

  

//scope--->
// (let and const)--->Block scope 
// (var)--->functional scope


var b=10;
function fun(){

    console.log(b);
}
fun();




console.log(a);
var a=10;
function fun(){
    var b=100;
    function fun2(){
        console.log(a);
        console.log(b);
    }
    fun2();
}
fun();