

let a = 10;
let b = 20;

if (a > b) {
    console.log('a is greater');
}

if (b > a) {
    console.log('b is greater');
}

if (a < b && '6' === 6) {
    console.log('Hello World');
} else {
    console.log('Hello from JS')
}


const age = parseInt(prompt("Enter your Age"));


if (age < 18) {
    alert('You cannot Enter !');
} else if(age<25){
    alert('You can Enter but you cannot drink');
} else {
    alert('You can enter and drink');
}



let ans=10;
let naam;//it is undefined and undefined is ultimately false so our first if statement is not run.
if(ans>=5 && naam){console.log("hi")};  //it will not run
if(ans>=5 || naam){console.log("hello")};//it will run  if we do not initialize naam because it will not seen only first expression is checked in the case of OR operator(if first value is true than it do not check the second value)
//whenever the final result is known to us the operation stops.
