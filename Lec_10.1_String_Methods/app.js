
// This is a comments


// String Template Literals

let firstName = 'Sabeel';
let lastName = 'Khan';

// let fullName = "Mr. " + lastName + "," + firstName;

let fullName = `Mr.${lastName},${firstName}`;

 console.log(fullName);


//we didnot have to define the datatype of any variable
//Weakly typed--->those languages which do not need to write datatype in front of variable. then these languages are weakly typed.
let magicNumer=10;
//we cant reinitialized the same variable in  let
console.log(magicNumer);

magicNumer='kush'//new bucket is formed by kush and our variable magicNumber will point out this bucket now.
console.log(magicNumer);


//Dynamically typed---> we can't decide that our variable is of which type before runtime. these languages are called dynamically typed.
let hello=10;
console.log(hello);
hello='kush'
console.log(hello);
hello=true;
console.log(hello);

//note---> Java Script is an interpreted ,JIT compilation , weakly typed , dynamically typed , programming language .


//undefined
//when we assign the variable without giving the value then it will give undefined when we will console it
let naam;
console.log(naam);//undefined
naam='kush';
console.log(naam)//kush