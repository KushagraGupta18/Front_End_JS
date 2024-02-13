
// Normal Function declaration
function a() {
    console.log('inside a');
}


// Functional Expresssion

const square = function (num) {
    return num * num;
}


// Arrow Function 


const add = (x,y)=> {
    return x + y;
}


// Arrow Function Implicit Return
const squareRoot = num => Math.sqrt(num);



const car = {
    name: 'Audi',
    color: 'Black',
    getColor: ()=> {
        console.log(this);
        console.log(this.color);
    }
}


let addition=(x,y)=>{
    return x+y;
}
console.log(addition(2,3));


let squareRoot1 = (num) => Math.sqrt(num);
console.log(squareRoot1(3));

//if this keyword is used inside arrow function then this will point out to the window object or global object.
let hello=()=>{console.log(this)};
hello();