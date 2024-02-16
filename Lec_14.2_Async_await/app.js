// function some(){

// }
// console.log(some());
//return undefined





//constructor function and it makes object
// let p1=new function(){//by new keyword it is creating an object


// }
// console.log(p1);//p1 is an object
//return an empty object





// async function some(){

// }
// console.log(some());
//return a promise by making async function(async function always return a promise)

//we tell the function that you work as asynchronous(wait for completion of work).


// async function some(){
//     await new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("3 sec ho gye");
//             resolve();
//         },3000)
//     })
//     await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("2 sec ho gye");
//             resolve();
//         },2000)
//     })
//     console.log("dono kaam ho gye");
// }
// some();


//async always works with await .
//await means ye kaam jbtk khtm nhi hota tb tk kro intezaar.
let ar = ['vishu','viashh',1,2,true,false];
function getBoolean(ar){
    let result=[];
    for(let i of ar){
        if(typeof i===Boolean){
            result.push(i);
        }
    }
    return result;
}
function getString(ar){
    let result=[];
    for(let i of ar){
        if(typeof i==String){
            result.push(i);
        }
    }
    return result;
}
function  getNumber(ar){
    let result=[];
    for(let i of ar){
        if(typeof i==number){
            result.push(i);
        }
    }
    return result;
}

console.log(getBoolean(ar));
console.log(getString(ar));
console.log(getNumber(ar));
