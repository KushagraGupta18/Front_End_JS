

// function fun(name,age) {
    
//     this.name = name;
//     this.age = age;
// }

// fun('Kartik',25);


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayHello=function() {
//     console.log(`Hello from ${this.name}`);
// }

// const p1 = new Person('Vivek', 23);
// const p2 = new Person('Garvit', 24);
// const p3 = new Person('Tushar', 22);





//sam
// function fun(){

// }
// let naam=fun();
// console.log(naam);//undefined


//constructor(new keyword before the function calling is creating this function as a constructor function whose task / job is to create object.)
// function user(){
//     this.username='kush',
//     this.email='kush@gmail.com'
// }
// let user1=new user();//create object
// console.log(user1);


//Prototype of a User function is User that is made by you
// function User(username,email){
//     this.username=username,
//     this.email=email,
//     this.desc=function(){
//         return `my name is ${this.username}`
//     }
// }
// let user1=new User('kush','kush@gmail.com');//create object
// console.log(user1);
// console.log(user1.desc());
// let user2=new User('vishu','vishu@gmail.com');//create object
// console.log(user2);
// console.log(user2.desc());

//i always make constructor function by Capital letter

function User(username,email){
    this.username=username,
    this.email=email
}
User.prototype.desc=function(){ //i add description inside the prototype
    return `my name is ${this.username}`;
}
let user1=new User('kush','kush@gmail.com');//create object
console.log(user1);
console.log(user1.desc());
let user2=new User('vishu','vishu@gmail.com');//create object
console.log(user2);
console.log(user2.desc());


