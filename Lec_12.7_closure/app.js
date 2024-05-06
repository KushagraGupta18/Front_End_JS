


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
//Closure--->A function bundled together with reference to its surrounding state or lexical environment(all variables used in that function are lexical environment) that is called closure.

// function somefunc(){
//     let username='einstein';
//     function printName(){       //while returning printName, it returns with  variables and functions  that are used in function and return its lexical environment also.
//         console.log(username);
//     }
//     return printName;
// }
// let returnedValue=somefunc();
// returnedValue();    //function printName(){
                    // console.log(username);
                    //    }

//there is no username in the function printName() but in the lexical environment of this function username is present thats why it will print username in console without giving error.




// function anything(){
//     let naam="mohammad"
//     function printNaam(){
//         console.log(naam);
//     }
//     printNaam();
// }
// anything();



// function anything(){
//     let naam="mohammad"
//     function printNaam(){
//         console.log(naam);
//     }
//     return printNaam;
// }
// let returnedFun=anything();
// console.log(returnedFun);
// returnedFun();//print mohammad



//real life uses

// function counter(){
//     let count=0;

//     function getCount(){
//         return count;
//     }
//     return getCount;
// }
// let counter1=counter();
// console.log(counter1);
// console.log(counter1());//now i am able to access my Count.
// console.log(counter1.getCount());//error



// function counter(){//this function returns the object
//     let count=0;

//     return{
//         getCount:function(){
//             return count;
//         }
//     }
// }
// let counter1=counter();
// console.log(counter1.getCount());//0(it will give me answer but i do not have direct access of count)



//application small
function counter(){
    let count=0;

    return {
        getCount: function(){
            return count;
        },
        increment:function(){
            count+=1;
        },
        decrement:function(){
            count-=1;
        },
        reset:function(){
            count=0;
        }
    };
}
let counter1=counter();
console.log(counter1.getCount());
counter1.increment();
counter1.increment();
console.log(counter1.getCount());
counter1.decrement();
console.log(counter1.getCount());
counter1.increment();
counter1.increment();
console.log(counter1.getCount());
counter1.reset();
console.log(counter1.getCount());

