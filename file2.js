// function returning function

// function myfun()
// {
//   return {name:"adhikari",age:19};
// }
// const ans=myfun();
// console.log(ans);  

// important array methods
//const numbers=[4,2,5,8];

// function multiplyby2(number,index){
//   console.log("index is",index);
//   console.log(`${number}*2=${number*2}`);
// }
// multiplyby2(numbers[0],0);
// multiplyby2(numbers[2],2);
// numbers.forEach(function(number,index)
// {
//     console.log(`index is ${index} number is ${number}`);
// })

// numbers.forEach(function(number,index)
// {
//     console.log(number*3,index);
// } )





// let array1=["item1","item2"];


// let array2= array1.slice(0);
// array1.push("item3");
// array2.push("item3");

// console.log(array1==array2);
// console.log(array1);
// console.log(array2);
  

// const value1="myvalue1";
// const value2="myvalue2";

// const obj={
//     objkey1:"myvalue1",
//     objkey2:"myvalue2",
// }
// const obj={
//     obj[key1]:"value1",
//     obj[key2]:"value2",
// }

// //const obj={};
// obj[key1]=value1;
// obje[key2]=value2;
//console.log(obj);


// function myfunc(a,b,c)
// {
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }
// const myvalue=myfunc(2,3,4,6,7,8,9);
// console.log(myvalue);

// function addAll(...numbers){
//     let total=0;
//     for(let number of numbers){
//         total=total+number;
//     }
//     return total;
//     //console.log(numbers),
//     //console.log(Array.isArray(numbers));
// }
// const ans=addAll(4,5,4);
// console.log(ans);
 
const person={
    firstName:"Prakash",
    gender:"male",
}

function printdetails({firstName,gender}){
    console.log(firstName);
    console.log(gender);
}
printdetails(person);