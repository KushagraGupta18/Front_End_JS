




// function delay(n) {
    

//     for (let i = 1; i <= n; i++){
//         const x = new Date().getTime();
//         while(new Date().getTime()<x+1000){}
//     }
//     fun();
// }


// function fun() {
//    console.log('Inside Fun')
// }

// console.log("START");


// setTimeout(function cb() {
//     console.log('Inside cb');
// }, 6000);



// console.log('END');


// const id  = setInterval(function () {
//     console.log('Inside setInterval!!');
// }, 2000)

// setTimeout(function () {
//     clearInterval(id);
// }, 10000);




//sam


// Java script is --->
// -->Weakly Typed,
// -->Dynamically Typed,
// -->Synchronous,
// -->Single threaded
// programming language


//single thread ---> It means that our java script engine can execute only one statement at one time.
//it means there is 1 call stack which works one by one(line by line)


//synchronous-->execution done in order.

//statement--->time, tide and js is wait for none.


//e.g.
// console.log('start');
// console.log('after 4 sec');
// console.log('finish')

//we cannot stop any command to stop any console

//--->SetTimeout()---->
//by the help of SetTimeout() method we can take wait for a command to run . Actually it is the method of browser not of java script
//when any GEC is made and one Global object is also created and in this case that is a browser and inside the browser there is a function SetTmeout() . thats why we can use that function


//syntax
//setTimeout(()=>{} , time(in ms));
//4 sec-->4000ms




// console.log('start');
// setTimeout(function(){
//     console.log('run after 4 sec')
// },4000);
// console.log('end');

//java script kisi ke hone ka intezaar nhi krega isliye phle 'end' chlega aur 4 sec baad 'run after 4 sec' chlega



// console.log('start');
// setTimeout(function(){
//     console.log('run after 2 sec')
// },2000);
// setTimeout(function(){
//     console.log('run after 4 sec')
// },4000);
// console.log('end');
//in this code first 'start' and 'end' were print . after 2 sec 'run after 2 sec' is printed and again after 2 sec 'run after 4 sec' is printed our clock is run from 3 sec because when above function is run clock completed its 2 sec already . timer for this func is now started from 3 sec. this function  also increases it does not waiting for anything.




// console.log('start');
// setTimeout(function(){
//     console.log('run after 4 sec')
// },4000);
// setTimeout(function(){
//     console.log('run after 2 sec')
// },2000);
// console.log('end');
//in this case two functions are created at storage but in callback queue 2sec wala phle queue mai jayega uske baad 4 sec wala jayega queue mai . thats why function of 2 sec will remove first after that function of 4 sec will be removed


//in this case first start and end is run after that 'run after 0 sec' is run. 
//jbtk aapka call stack empty nhi hoga tbtk callback Queue mai se koi bhi value aapke call stack ke andar nhi jayegi.
// console.log('start');
// setTimeout(function(){
//     console.log('run after 0 sec')
// },0);
// console.log('end');
//code line by line execute huya sbse phle clg chla uske baad setTimeout chla aur usne time web api ko use kiya aur us function ko store krdiya aur vo call back queue mai chla gya . call back queue ke andr se vo jb tk nhi niklega tb tk call stack empty na ho jaye isliye ab clg('end') chlega uske baad call stack empty ho jayega (call stack empty means pura code chl chuka hai)and then call back queue se run after 0 sec wala function call stack mai jayega and fir run hoga.




