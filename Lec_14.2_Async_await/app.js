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
async function some(){
    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("3 sec ho gye");
            resolve();
        },3000)
    })
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2 sec ho gye");
            resolve();
        },2000)
    })
    console.log("dono kaam ho gye");
}
some();
//async always works with await .
//await means ye kaam jbtk khtm nhi hota tb tk kro intezaar.




