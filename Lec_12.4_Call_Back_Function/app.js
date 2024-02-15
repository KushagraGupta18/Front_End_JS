//callback function--->
//A callback function is a function passed into another function when is then invoked(call) inside the function.



function getBoolean(item){
    return typeof item==='boolean';
}
function getString(item){
    return typeof item==='string';
}
function getNumber(item){
    return typeof item==='number';
} 

//these above functions are passed as an arguement in the check function and inside the check function they are invoked(call) so these functions are called call back function.
function check(item,fn){//check is HOF
    return fn(item);    //calling(getBoolean , get String , get Number as fn are calling so these functions are called Call Back Function)
}
console.log(check(true,getBoolean));//true
// console.log(check(19,getString));//false
// console.log(check(19,getNumber));//true