

// class Person{

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayName() {
//         return this.name;
//     }
// }


// const p1 = new Person('Kartik', 26);
// const p2 = new Person('Sabeel', 22);


// -----------------------------------

// class Car{

//     constructor(name, color, price) {
//         this.name = name;
//         this.color = color;
//         this.price = price;
//     }

//     getCarName() {
//         return this.name;
//     }

//     get getPrice() {
//         return this.price;
//     }

//     set setPrice(newPrice) {
//         this.price = newPrice;
//     }
// }


// class RacingCar extends Car{

//     constructor(name, color, price, maxSpeed, isDiscBrake) {
        
//         super(name,color,price) //calling the parent class constructor

//         this.maxSpeed = maxSpeed;
//         this.isDiscBrake = isDiscBrake;
//     }

//     get getMaxSpeed() {
//         return this.maxSpeed;
//     }


// }

// // let c1 = new Car('Audi', 'Black', 2000000);


// const r1 = new RacingCar('BMW', 'red', 300000, 400, true);






//sam
//when classes are not there we are using closure property.
//alternative way of wriiting classes is constructor func.
//classes is syntaticall sugar(sundar tarika) of your constructor function . there is no difference between constructor func and classes only the writting way of both is different.



//constructor func revise
// function Person(firstname,email){
//     this.firstName=firstname,
//     this.email=email
// }  
// Person.prototype.printName=function(){
//     console.log(`${this.firstName}+ ${this.email}`);
// }
// Person.prototype.getName=function(){
//     return (`${this.firstName}+ ${this.email}`);
// }
// let person1=new Person('kush','kush@gmail.com');
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.printName());
// console.log(person1.getName());


//prototype of constructor function is the name of that function Person



//class syntax


class Person{
    constructor(firstname,email){
        this.firstName=firstname,
        this.email=email
    }

    getName(){
        return (`${this.firstName}+ ${this.email}`);
    }

    printName(){
        console.log(`${this.firstName}+ ${this.email}`);
    }
}
let person1=new Person('MS','mas@gmail.com');
console.log(person1);
console.log(person1.firstName);
console.log(person1.getName());
console.log(person1.printName());

//inheritance(All Properties of Person can be accessed by Stundent because student inherit the Peron class)
// class Student extends Person{

// }
// let student1=new Student('barack','obama@gmail.com');
// console.log(student1);
// console.log(student1.firstName);
// console.log(student1.getName());
// console.log(student1.printName());



//now if i want to add one more property in my object. than i have to override the constructor function.

// class Student extends Person{
//     constructor(firstname,email,rollno){
//         this.rollno=rollno;
//     }
// }
// let student1=new Student('barack','obama@gmail.com',10);
// console.log(student1);
// console.log(student1.firstName);
// console.log(student1.getName());
// console.log(student1.printName());
// console.log(student1.rollno);//error( Must call super constructor in derived class before accessing 'this' or returning from derived constructor)



//super is also a constructor which is write when we call super constructor in derived class before accessing 'this' or returning from derived constructor
//jab hmm apne parent ki property ko run krana chahte hai to super constructor kaam aata hai.
class Student extends Person{
    constructor(firstname,email,rollno){
        super(firstname,email);//firstname,email hmm uper se inherit kr rhe hai which means super constructor ko call krna pdega jo aapne jha se extend kiya hai vha se vo cheez ko laakr dedega
        this.rollno=rollno;
    }

    getName(){      //getName() is override
        return (` super se bhi uper ${this.firstName}+ ${this.email}`);
    }
}
let student1=new Student('barack','obama@gmail.com',10);
console.log(student1);
console.log(student1.firstName);
console.log(student1.printName());
console.log(student1.getName());    //first it will search in their local environment if it is not found than it will go to its parent with the help of super constructor 
console.log(student1.rollno);

