

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



let promise=new Promise(function(){
    
});//by new keyword object is created and this return a promise.
//new promise() accept one function and it is immediately called
