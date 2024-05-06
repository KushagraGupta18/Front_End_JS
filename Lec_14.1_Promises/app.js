

// const x = new Promise(function (resolve, reject) {
    
//     setTimeout(() => {
//         let randomNumber = Math.random();
//         console.log(randomNumber);
    
//         if (randomNumber < 0.5) {
//             resolve();
//         } else {
//             reject();
//         }
    
//     }, 2000);

// });


// x.then(function () {
//         console.log('Inside Resolve');
//     })
//     .catch(function () {
//         console.log('Inside Reject');
//     })






//sam

//To tackle the problem of call back hell promises are introduced.


//constructor of promise//promise is an object
//by new keyword object is created and this return a promise.
//new promise() accept one function and it is immediately runs

//if my task are completed without any problem than my promise will be resolve otherwise reject.



// let promise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // let data="hi dosto ye promise hai";
//         // resolve(data);//case 1
//         // let err="oops dikkat aa gyi"
//         // reject(err)//case 2

//         resolve('hi mai resolve ho gya i.e. .then()');
//     }, 3000);
// });

//if resolved than we go to .then()
// promise.then(function(data){
//     console.log(data);
// })

//if reject than we go to .catch()
// promise.catch(function(err){
//     console.log(err);    
// })






// let promise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // resolve('hi mai resolve ho gya i.e. .then()');
//         reject('hi mai barbaad ho gya .catch()');
//     }, 3000);
// });
// promise.then(function(data){
//         console.log(data);
// }).catch(function(err){
//     console.log(err);    
// })
//dono ek saath nhi chl skte jo phle aa jayega vo chl jayega



// let p1=new Promise((resolve,reject)=>{
//     console.log("3 second ka wait kro kaam in process...");
//     setTimeout(()=>{
//         // resolve();
//         reject();
//     },3000)
// });
// p1.then(()=>{
//     console.log('kaam process ho gya');
// })
// .catch(()=>{
//     console.log("error aa gya mori mayaa");
// })






//.then() .catch() chaining---> (arize kr rhi hai problem ko)

let p1=new Promise((resolve,reject)=>{
    console.log("3 second ka wait kro kaam in process...");
    setTimeout(()=>{
        resolve();
        // reject();
    },3000)
});
p1.then(()=>{
    return new Promise( (resolve, reject)=>{
        console.log("promise run krdiya hai intezaar kro ab")
        setTimeout(()=>{
            console.log("2 sec lg gye bhaishaab");
            resolve();
        },2000);
    })
})
.then(()=>{
    console.log("dono kaam ho gye mere");
})
.catch()

//in the above code no horizontal growth is there is vertical growth that is why we are using promises to safe from call back hell.
//we can do error handling in promises.

//chaining is created by .then() and .catch() in promises. By this promises arize the problem.
//for this we are using async and await
