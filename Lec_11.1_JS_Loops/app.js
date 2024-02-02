//Looops

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (initilisation; condition check ; updation) {
    
// }

// let i = 1;

// for (; i <= 10;){
//     console.log(i); i++; 
// }

// for (let i = 100; i <= 200; i -= 20){
//     console.log(i)
// }


// while (condition) {
//     // statements
// }

// let i = 100;

// while (i >= 0) {
//     console.log(i);
//     i -= 10;
// }



// break and continue statements in Loops

// for (let i = 1; i <= 10; i++){
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 0; i <= 5; i++){
//     for (let j = 0; j <= 5; j++){
//         if (i === j) {
//             break;
//         }
//         console.log(i, j);
//     }
// }

// for (let i = 0; i <= 10; i++){
    
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
    
// }


// for of Loops

// const colors = ['Red', 'Green', 'Orange', 'Blue'];

// let allColors = "";

// for (let color of colors) {
//     allColors +=color+' ';
//     console.log(color);
// }

// console.log(allColors)


// const car = {
//     name: 'Audi',
//     price: 20000,
//     isDiskBrake: true,
// }

// for (let i in car) {    
//     console.log(`${i}--->${car[i]}`);
// }


//for loop
for(let i=0;i<=5;i++){
    for(let j=0;j<=5;j++){
        if(i==j){
            break;
        }
        console.log(i , j)
    }
}


//while loop
let a=100;
while(a>=0){
    console.log(a);
    a-=10;
}

//for-in loop(object)

let person={
    name:'kush',
    age:21,
    isMale:'true'
}
for(let item in person){
    // console.log(item);//it will give me keys
    // console.log(this.item);//it will give undefined
    console.log(`${item}--->${person[item]}`);

}

//for-of loop(array,map,list,vector)

let arr=['kush','gupta',10,90];
for(let item of arr){
    console.log(item);
}



let car={
    name:'mercedes',
    color:'blue',
    title:function(){
        return `this is name ${this.name} and color is ${this.color}`
    }
}
console.log(car.title())
for(let item in car){
    console.log(`${item}--->${car[item]}`);
}
