

const person = {
    firstName: 'Sabeel',
    lastName:'Khan',
    age: 22,
    isAdult:true
}

const car = {
    name: 'Audi',
    maxSpeed: 400,
    color:'Black'
}

 
let obj={
    name:'kush',
    age:21
}


let school={
    name:'cbps',
    location:'agra'
}
console.log(school);
console.log(school.name);
console.log(school.location);
console.log(school['name']);


//objects are also reference type
let school1=school;
//school1 is also pointing the object which is pointed by school
console.log(school1.location)
console.log(school.location)

school1.name='kps'
console.log(school1.name)
console.log(school.name)    //by this we can say that they are passed by reference



//method and function
//we can also store functions inside the object and those functions that are defined inside the objects are called methods

let person1={
    evs:90,
    cn:90,
    web:100,
    math:90,
    total:function(){
        console.log(90+90+100+90);
    },
    bulao: function (){
        return ('kush ko bulao')
    }
}
console.log(person1)
console.log(person1.total())//paranthesis are needed to call methods
//undefined is also came after bulao because function always return anything. when we do not return anything from our function then js automatically returns undefined
console.log(person1.bulao())//no undefined is print because we are returning string from the function
console.log(person1.bulao())

//this keyword (by this keyword i can access the properties of object that are present inside object)
//this is a special keyword which is pointing out the object(person2)
let person2={
    name:'kush',
    evs:90,
    cn:90,
    web:100,
    math:90,
    total:function(){
        return (this.evs+this.cn+this.web+this.math);
    },
    bulao: function (){
        return (`${this.name} ko bulao`)
    }
}
console.log(person2.total());
console.log(person2.bulao());
