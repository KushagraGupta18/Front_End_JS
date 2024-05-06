

//let and const---> Block scope
//var--->Functional scope

//Block Scope
//{

//}


//Functional scope
//function fun(){

// }


// console.log('hi i am free');
//block are always run
// {
//     console.log('hi i am a block')
// }



// let and const are block scope . block is finished so all variables and function that are defined inside block can not be accessed to outside the block.
// let score=50;
// if(score>33){
//     let x=20;
// }
// console.log(x);//it will give error (Reference Error) ----->because x is defined inside the block by let and let is having a property of block scope.



// let x=10;
// {
//     let x=20;
//     console.log(x);//20
// }
// console.log(x);//10



// let x=10;
// {
//     x=20;
//     console.log(x);//20
// }
// console.log(x);//20


// let x=10;
// {
//     console.log(x);//10
// }
// console.log(x);//10



//var can't consider block scope
//var is a functional scope so it does not define new variable y it only override the value of y in the case of block.
//only updation is there in the case of var while using block scope
// var y=10;
// {
//     var y=20;
//     console.log(y);//20
// }
// console.log(y);//20



// var y=10;
// {
//     y=20;
//     console.log(y);//20
// }
// console.log(y);//20





//var is following functional scope so inside the function it will accessing  the value that is present in their local memory(inside the function). and after finishing the function our fun() function is removed out from call stack and value is deleted from our local memory. now it will came to their parent call stack.
// var a=100;
// function fun(){
//     var a=50;
//     console.log(a);//50
// }
// fun();
// console.log(a);//100


// let a=100;
// function fun(){
//     let a=50;
//     console.log(a);//50
// }
// fun();
// console.log(a);//100


// let a=100;
// function fun(){
//     a=50;
//     console.log(a);//50
// }
// fun();
// console.log(a);//50



// var a=100;
// function fun(){
//     a=50;
//     console.log(a);//50
// }
// fun();
// console.log(a)//50



//hoisting(accessing a variable before its initialization)

// console.log(a);//undefined(hoisting occurs)--->var
// console.log(b);//(error)cannot access b before initialization(hoisting occurs in the case of DTZ)-->let
// console.log(c);//(error)cannot access b before initialization(hoisting occurs in the case of DTZ)--->const

// var a=10;
// let b=20;
// const c=90;


