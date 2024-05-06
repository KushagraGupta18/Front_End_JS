

// function fun(x,func) {
    
//     console.log(x);
//     console.log('inside fun')
   
//     // console.log(func);

//     func();
// }
// function innerFun() {
//     console.log('Inside inner fun');
// }
// fun(87, function() {
//     console.log('Inside inner fun');
// });


// --------------------------

// function fun() {
//     console.log('inside fun');
//     function innerFun() {
//         console.log('innerFun');
//     }
//     return innerFun;
// }
// const f = fun();
// console.log(f);
// f();





//sam



//Higher Order Funcion(HOF)
// Function that operate on other function either by taking them as an arguement or returning them are called HOF. 

// 1.
// function a(fn){ //a is HOF because b function is came in the arguement of a function.
//     console.log('hi i am inside A');
//     fn();
// }
// function b(){
//     console.log('hi i am inside B');
// }
// a(b);



// 2.
// function a(){//a is HOF because it returning  b as a function
//     console.log('inside a');
//     function b(){
//         console.log('inside b')
//     };
//     return b;
// }
// let temp=a();
// console.log(temp);
// temp();


//real life taste of HOF

function getBoolean(item){
    return typeof item==='boolean';
}
function getString(item){
    return typeof item==='string';
}function getNumber(item){
    return typeof item==='number';
}
function get(arr,fn){   //get is HOF
    let result=[];
    for(let item of arr){
        if(fn(item)){
            result.push(item);
        }
    }
    return result;
}
let arr=[10,20,30,true,false,true,'kush','vishu','gupta'];
console.log(get(arr,getBoolean));
console.log(get(arr,getString));
console.log(get(arr,getNumber));


