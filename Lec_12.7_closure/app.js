


// function a() {
    
//     let d = 10;

//     let b = 100;

//     function c() {
//         b++;
//         d++;
//         console.log(b);
//     }

//     return c;
// }


// let f = a();

// //.......10000 lines

// f();
// f();
// f();
// f();
// f();







//sam
//Closure--->A function bundled together with reference to its surrounding state or lexical environment that is called closure.

function somefunc(){
    let username='einstein';
    function printName(){       //while returning printName, it returns with  variables and functions  that are used in function and return its lexixal environment also.
        console.log(username);
    }
    return printName;
}
let returnedValue=somefunc();
returnedValue();    //function printName(){
                    // console.log(username);
                    //    }

//there is no username in the function printName() but in the lexical environment of this function username is present thats why it will print username in console without giving error.
