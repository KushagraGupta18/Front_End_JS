


// const person = {
//     name: 'Kartik',
//     age: 25,
//     isAdult: true,
//     sayHello: function () {
//         console.log('Hello from Kartik');
//     }
// }


// let p1 = Object.create(person);
// let p2 = Object.create(p1);






//sam
let todo={
    title:'buy flowers',
    desc:function(){
        return `your task is to ${this.title}`
    }
}
console.log(todo.title);
console.log(todo.desc());
console.log(todo.toString());//if we console todo.toString() it will give us object this is only because of prototype 

//if you try to access the property of an object than javascript will firstly find it inside that object , than if it not found , it will go to its prototype.


//what is protoptype---> it is also an object which is used as a fallback source(jb aapka project fail ho jata hai tb vo fallback krta hai prototypes ke pass) of properties.

//object
//in above case toString() is not a part of todo object than it goes to its prototype.
//    __proto__    (--->dunder proto)  (dunder proto gives us parent of the object)
//todo.__proto__ is equals to Object.prototype(fallback source of object todo)
//parent of object.prototype is null.(object.prototype.__proto__ is equals to null)



//array
//in the case of an array if we declare array it will convert into an object.
//and the prototype of an array is Array.prototype(arr.__proto is equal to Array.prototype)
//and the prototype of an Array.prototype is Object.prototype and prototype of Object.prototype is null
//arr.__proto gives us all methods of an array



//string 
//string behind the scene converts into an object.
// and the prototype of an string is String.prototype(str.__proto is equal to String.prototype)
//and the prototype of an String.prototype is Object.prototype and prototype of Object.prototype is null
//str.__proto gives us all methods of an String.

//same as boolean same as function
 
