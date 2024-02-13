


//galat tarika
// function step1(){
//     setTimeout(function(){
//         console.log('image select kr rha hu');
//         return 'image';
//     },4000)
// }

// function step2(image){
//     setTimeout(function(){
//         console.log(`sundar kr rha hu ${image} ko rukja`)
//         return "sundar wali photo";
//     },2000)
// }


// function step3(filteredImage){
//     setTimeout(function(){
//         console.log(`bdiya sa caption dekhliya on ${filteredImage}`);
//         return "footva pelus captionvaa dono";
//     },3000)
// }


// function step4(finalimage){
//     setTimeout(function(){
//         console.log(`${finalimage} uploaded`);
//     },2000);
// }


// //calling
// let image=step1();
// let filteredImage=step2(image);
// let finalimage=step3(filteredImage);
// step4(finalimage);
//by this we can't get order 





//call back hell(pyramid of doom)---> code flow will grows towards horizontal side.
//better tarika
function step1(fn){
    setTimeout(function(){
        console.log('image select kr rha hu');
        fn('image')
    },4000)
}

function step2(image, cb){
    setTimeout(function(){
        console.log(`sundar kr rha hu ${image} ko rukja`)
        cb('filtered image')
    },2000)
}

function step3(filteredImage, cb){
    setTimeout(function(){
        console.log(`bdiya sa caption dekhliya on ${filteredImage}`);
        cb('filtered with caption');
    },3000)
}

function step4(finalimage){
    setTimeout(function(){
        console.log(`${finalimage} uploaded`);
    },2000);
}


step1(function(image){
    step2(image, function(filteredImage){
        step3(filteredImage , function(finalimage){
            step4(finalimage);
        })
    });
})
//by this our order is maintained by helping of nesting call back.
//when our first function is finished then our second function will run and so on.
//disadvantage of nesting call back-->  1. Call Back Hell    2. dependency(if i dont run step 1 function than my other functions will never run)

//solution for call back hell---->promise and solution of promises are---->async await

