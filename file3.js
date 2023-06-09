// const obj1 ={
//     key1:"Value1",
//     key2:"value2",
// }

// const obj2 = Object.create(obj1);// {}
// //there is one more way to create empty object
// obj2.key3="value3";
// //obj2.key="unique";
// console.log(obj2);
// //this is happing
// console.log(obj2.__proto__);



// const user1={
//     firstName:"Adhikari",
//     age:19,
//     about:function(){
//         console.log(this.firstName,this.age);
//     }
// }


// const user1={
//     firstName:"Adhikari",
//     age:19,
//     about(){
//         console.log(this.firstName,this.age);
//     }
// }
// user1.about();

// const user1={
//     firstName:"Prakash",
//     lastName:"Adhikari",
//     email:"pa7846665@gmail.com",
//     address:"Champawat,uttarakhand",
//     about(){
//         return`${this.firstName} is ${this.age} years old`; 
//     },
//     is18(){
//         return this.age>=18;
//     }
// }
//function (that function create object )
//2.)add key value pair
//3.)object ko return karega

function createUser(firstName,lastName,email,age,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        return `${this.firstName} is ${this.age} years old`
    };
    user.is18=function(){
        return this.age>=18;
    }
    return user;
}
 
const user1=createUser('Prakash','adhikari','pa7846665@gmail.com','19','champawat,uttarakhand');
console.log(user1);
// const is18=user1.is18();
// console.log(is18);
var numbers = [1, 2, 3, 4, 5];   
const doubleValue = numbers.map((number)=>{   
    return (number * 2);   
});   
console.log(doubleValue);