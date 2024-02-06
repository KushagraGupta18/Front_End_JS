

// function fun(f) {
//     f();
// }



// fun(function() {
//     console.log('inside a');
// });


// const arr = [1, 2, 3, 4, 5, 6];

// function square(num) {
//     return num * num;
// }



// Map method in JS


// let squareOfNums = arr.map(square);

// let squareOfNums = arr.map(function (num, idx) {
//     // console.log(idx);
//     return Math.sqrt(num);
// })

// const cubes = arr.map(function (num) {
//     return num ** 3;
// })

// console.log(arr);
// console.log(squareOfNums);
// console.log(cubes);


// -------------------------Filter method---------

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// function isEven(num) {
//     return num % 2 === 0;
// }

// const evenNums = nums.filter(isEven);

// console.log(nums);
// console.log(evenNums);


// --------------------------------sort

// const arr = [1, 2, 3, 99, 11, 10, 12, 0, 32, 78];

// arr.sort(function (a, b) {
//     return b - a;
// });

// console.log(arr);





//sam

//Array Methods

//1.forEach() methods(it always accept only call back function and function is automatically called by forEach method)

// let students=['sachin','manish','kush','kool'];

// students.forEach(function(item){//item is an iterator which point out all the element of an array
//     console.log(item)
// });

//function have two arguement first is item and second is their index
// students.forEach(function(item,index){
//     console.log(`index was ${index} ----> item was ${item}`);
// })




//2.map() method--->array method

// let marks=[10,15,18,9,80,78,90];


// let newMarks=marks.map(function(item){
//     return item*2;
// })
// console.log(marks);
// console.log(newMarks);

//we can return both arguement in the form of array
// let newArray=marks.map(function(item,index){
//     return [item+2,index];
// })
// console.log(newArray);



//3. filter() method--->
//it only send truthfull value to new array


// let marks=[10,15,18,9,80,78,90];
// let filterArray=marks.filter(function(item){
//     if(item%2===0){  //in filter you can only return item value(truthy and falsy value) not index.
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(marks);
// console.log(filterArray);


//4. sort() method--->
// let arr=[11,12,3,43,23,88,90,34,89];
// let newArray=arr.sort();//lexographically sorted
// console.log(arr);//it is also updated
// console.log(newArray);


//ascending order
// let arr=[11,12,3,43,23,88,90,34,89];
// let newArray=arr.sort(function(a,b){
//     return a-b;
// })
// console.log(arr)
// console.log(newArray);


//descending order
// let arr=[11,12,3,43,23,88,90,34,89];
// let newArray=arr.sort(function(a,b){
//     return b-a;
// })
// console.log(arr)
// console.log(newArray);


