


// Implicit Binding - Autmatically done by the JS Engine

// const person = {
//     name: 'Sabeel',
//     age: 22,
//     sayName: function () {
//         console.log(this);
//         console.log(`Hello from ${this.name}`)
//     }
// }


// Explicit Binding


// function fun(name, age) {
//     console.log(this);
//     this.name = name;
//     this.age = age;
// }

// const a = {
//     l: 10,
//     m: true,
//     k:'Hello'
// }


// fun('Kartik');


// fun.call(a, 'Vivek', 24);

// const f = fun.bind(a);
// // 100000 line of code

// f('Garvit', 25);






//sam


//this kisko point kr rha hai ye decide hoga aapki function calling(invoke) kese ho rhi hai...



//5 types of this keyword---->

// 1. Regular function invocation
// function fun(){

// }
// fun();


// 2. Method invocation
// let obj={
//     fn:function(){
//         console.log('hello');
//     }
// }
// obj.fn();

// 3. Constructor invocation
// function fun(){

// }
// let obj1=new fun();

//4. Indirect calling
    // --->call()
    // --->apply()
    // --->Bind()


//5. Arrow function
// const fn=()=>{}



//window object--->
//whenever a java script code is run a global execution context is created along with it a global object is also created. and in the case of browser this global object is called my window object. 

//1.Regular function(when the regular function is directly called then this is pointing out the window).
// function fn(){
//     console.log(this);//this is pointing out the window
// }
// fn();



//2.Method invocation 
// let obj={
//     number:2,
//     fn:function(){
//         console.log(this);
//     }
// }
// obj.fn();//this depend krta hai ki aapke function ki calling kese ho rhi hai .fn function ki calling direct nahi ho rhi hai 
         //fn function ki calling object ke uper iska mtlb direct calling nhi hai . is case mai this point out krega object ko.
         //this is pointing towards the object over which it is called.



// let obj={
//     number:2,
//     fn:function(){
//         console.log(this);
//     }
// }
// let myFun=obj.fn;
// myFun();//this is pointing out the window because this kisko point kr rha hai vo depend krta hai aapka function kese call ho rha hai and in this function call is direct thats why this is pointing out window.



// let obj2={
//     fn:function(){
//         function calculate(){
//             console.log(this);
//         }
//         calculate();//regular calling
//     }
// }
// obj2.fn();//this pointing out window in this case also. because when we run obj.fn() 
          //it will goes to inside the function2 and it will run and there is one function by the name
          // of calculate and calculate function i run and inside the function we will console.log(this) . 
          //It is inside calculate function now i have to check how calculate function is called and calculate function is called directly that's why this pointing out the window.





//3. Constructor function calling
//in case of constructor function this keyword is always point newly created object

// function CreateObj(){
//     this.x=20;
// }
// let obj=new CreateObj();
// console.log(obj.x);
// console.log(obj);

//newly created object ko this point krega in the case of constructor function




//4. Indirect Calling--> .call() , .apply() , .bind()           //polymorphism achieved by call and apply

// let obj={
//     a:20,
//     fn:function(){
//         console.log(this);
//     }
// }
// let obj2={
//     a:50
// }

// obj.fn();
// obj2.fn();//error

// obj.fn.call(obj2);//i want to call obj.fn from obj2
//calling is done with the refernce of obj2 so this is pointing out obj2.
//jab bhi tum .call() method ka istemaal  kr rhe hote ho tb jo aap call ke andr mention krte ho aapka this usse point kr rha hota hai.


// obj.fn.apply(obj2);//this is also pointing out obj2 




//there is a difference in call and apply in case of call you can send many no. of arguements in comma seperated.but in .apply() arguements are send inside the array
// let obj={
//         a:20,
//         fn:function(a,b,c){
//             console.log(this,a,b,c);
//         }
//     }
// let obj3={
//     name:'kush'
// }
// obj.fn.call(obj,1,2,3);
// obj.fn.apply(obj,1,2,3);//it will give error
//in case of apply i have to provided with one array;
// obj.fn.apply(obj,[1,2,3]);

//jo bhi tumne provide kra hai call ke andr vhi tumhara this point krega


//.bind()
// let obj3={
//     fn:function(){
//         console.log(this);
//     }
// }
// let myFun=obj3.fn.bind(obj3);//we are binding this with obj3 and if we run myFun() there is direct calling and in this case this is pointing out obj3 because we are already bind with that
// myFun();//regular invocation but this is pointing out obj3 because we are bind that



