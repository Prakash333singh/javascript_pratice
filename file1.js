// console.log print karane ke kaam atta hai 
// "use strict"; 
// console.log("hemlo");
// let firstName="Prakash";
// console.log(firstName.length);
// console.log(firstName[firstName.length-1]);
//index=length-1;



// let SecondName=" adhikari  ";
// console.log(SecondName.length);
// let newstring=SecondName.trim();
// console.log(newstring);
// console.log(newstring.length);

// let SecondName="adhikari";
// let newstring=SecondName.slice(1);
// console.log(newstring);

// let age=19;
// let firstName="Prakash";
// let aboutme=`my name is ${firstName} and my age is ${age}`;
// console.log(aboutme);
// let num1="54";
// let num2=54;
// if(num1===num2)
// {
//     console.log("equal ho gye");
// }
// else
// {
//     console.log("not equal");
// }
// let age=8;
// let drink=age>=5 ? "coffee":" tea";
// console.log(drink);

// console.log('simple for loop');
// for(let i=1;i<=10;i++) {
//   console.log(i);
// }
//let x;
//console.log("hello");       // to display message to the browser console
//document.write(x);    // to write to HTML
//prompt("Your name?","friend");    // input dialog. Second argument is the initial value
//alert(x); // writes in an alert box
///

//for..in

// let info = {
//     name: "foo",
//     id: 123
//   }
  
//   for (let prakash in info) {
//     console.log(prakash); // prints keys of info which are name and id
//   }

 // for..of
// let mobiles = [ "iPhone", "Samsung", "OnePlus", "Pixel"];
// for(let adhikari of mobiles) {  
//     console.log(adhikari);
// } 
// const person={
//     name:"prakash",
//     age:"19",
//     hobbies:["guitar","football","sleeping"]
// }
// //console.log(person.name);
// console.log(person);

// function calc(x, y)
//   {
//     let sum =x+y;
//     let product = x*y;
//     return [sum, product];
//   }
// let [sum, product] = calc(10, 20);
// console.log(sum, product);
// let arr = [3, 4, 5];
// let [a,b,c] = arr;
// console.log(a,b,c);
// //This will print 3, 4 and 5
// let [x,,z] = arr;
// console.log(x,z);
// //This will only print 3 and 5
// let sum= (a,b,c) => {
//     return a+b+c;
// }
// console.log(sum(10,20,30))

// let mystr= +"34";
// console.log(typeof mystr);
// let age="18";
// age=Number(age);
// console.log(typeof age);

//console.log(typeof null);

// let myvariable=null;
// console.log(myvariable);

//big int
// let myNumber=BigInt(12);
// let sameMynumber=123n;
// console.log(myNumber);
// console.log(myNumber+sameMynumber);

// let fruits =["mango","banana","orange"];
// let obj={};//object literals
// console.log(fruits);
// fruits[1]="sitaphal";
// console.log(fruits);
// console.log(typeof fruits);//object
// console.log(typeof obj);    //object
// console.log(Array.isArray(fruits));  //true
// console.log(Array.isArray(obj));  //false


//pop function
// let fruits =["mango","banana","orange"];
// console.log(fruits);
// let popped_fruit=fruits.pop();
// console.log(fruits);
// console.log("popped fruits is",popped_fruit);  //orange

//push function
// let fruits =["mango","banana","orange"];
// //fruits.push("kafal");


// //unshift 
// //let fruits =["mango","banana","orange"];
// //fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits);


// //shift
// let removedFruit =fruits.shift();
// console.log(fruits);
// console.log("removed fruits is ",removedFruit);

//primitive vs reference data types
// let num1=6;
// let num2=num1;  //2 copy ban jayengi num1=6,num2=6;
// console.log("value of num1",num1);
// console.log("value of num2",num2);
// num1++;
// console.log("after incrementing num1",num1);
// console.log("value of num2",num2);


//reference types
//array
// let array1=["item1","item2"];
// let array2=array1;
// console.log("array 1",array1);
// console.log("array 2",array2);
// array1.push("item3");
// console.log("after pushing elements to array 1");
// console.log("array 1",array1);
// console.log("array 2",array2);

//how to concatenate two arrays
//let array1=["item1","item2"];
// //let array2=array1.slice(0); 
// //let array2=["item1","item2"];
// let array2=[].concat(array1);

// array1.push("adhikari");
// //let array2=array1.slice(0); 
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);
//new way 
//spread operator
// let array2=[...array1];
// array1.push("items3");
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

//for loop in array
//let fruits=["mango","grapes","orange","kafal"];
//for(let i=0;i<fruits.length;i++)
//{
  //  console.log(i,fruits[i]);
//}
 

// for of loop in array
// const fruits=["mango","grapes","orange","kafal"];
// const fruits2=[];
// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);


//array destructing
// const myArray =["value1","value2","value3","value4"];
// //let myvar1 = myArray[0];
// //let myvar2= myArray[1];
// let [myvar1,myvar2,...myNewArray]=myArray;
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);
// console.log(myArray);


//let [myvar1,myvar2]=myArray;


//objects refrence type
//arrays are good but not sufficient
//for real world data
//objects store key value pairs
//objects dont have index


//how to create objects

//const person ={name:"prakash",age:19};
// const person= {
//     name:"Prakash",
//     age:22,
//     hobbies:["guitar","sleeping","listning music"]
// }
//console.log(person);

// //how to access an objexts
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// //how to add key value pair to objects
// person.gender="male";
// console.log(person);
// console.log(person["name"]);


// //person[key]="prakash@mail.com";
// console.log(person); 
// console.log(typeof(object.keys(person)));
// const val=Array.isArray((object.keys(person)));
// console.log(val);
 

// const key1="objekey1";
// const key2="objekey2";


// const value1="myvalue1";
// const value2="myvalue2";


// const obj={
//     [key1]:value1,
//     [key2]:value2
// }
// console.log(obj);

//spread opertor
// const array1=[1,3,5];
// const array2=[4,8,8,9];

// //const NewArray=[...array1,...array2,56,89];
// const NewArray=[..."1234567789"];
// console.log(NewArray);

// const obj1 = {
//     key1:"value1",
//     key2:"value2"
// };
// const obj2 = {
//     key1:"valueunique",
//     key3:"value3",
//     key4:"value4",
// };
// //const newobject={...obj1,...obj2,key69:"value69"};
// const newobject={...["item1","item2"]};
// console.log(newobject);



// object destructing
// const band={
//     bandName:"led zepplia",
//     famousSong:"stairway to heaven",
//     year:1968,
//     lastname:"adhikari",
// };
// //const bandName=band.bandName;
// // const famousSong=band.famousSong;
// let {bandName,famousSong,...restpros}=band;
// console.log(bandName,famousSong);
// console.log(restpros);

//   functions

// function isEven(Number)
// {
//     if(Number%2==0)
//     {
//         return true;
//     }
//     return false;
// }
// console.log(isEven(9));


// function findArrayIndex(array,target){
//    for(let i=0;i<array.length;i++)
//    {
//     if(array[i]==target)
//     return i;
//    }
//    return -1;
// }

// const myArray=[1,3,8,90];
// const ans=findArrayIndex(myArray,10);
// console.log(ans);

// function startingfirstchar(string)
// {
//     return string[0];
// } 
// console.log(startingfirstchar("prakash"));


// function singHappyBirthday(){
// console.log("happy birthday to me...");    
// }
// singHappyBirthday(); 
// arrow function 
// const singHappyBirthday =()=>{
//     console.log("happy birhday to me...");
// }
// singHappyBirthday();

// function sumThreeNumbers(number1,number2, number3)
// {
//     return number1+number2+number3;
// }

// arrow function
// const sumThreeNumbers=(number1,number2,number3)=>number1+number2+number3;

// const ans= sumThreeNumbers(3,2,6);
// console.log(ans);

// const firstchar=anystring =>anystring[0];
// console.log(firstchar("adhikari"));

// hosting
// hello();
// function(){
//     console.log("hello world");
// }
// console.log(hello);
// const hello="hello world";
// console.log(hello);


// function inside function
// const app=()=>{
//     const myfunc = () =>{
//         console.log("hello from myFunc");
//     }
    
//     const addTwo=(num1,num2)=>{
//         return num1+num2;
//     }
//     const mul=(num1,num2)=>num1*num2;
//     console.log("inside app");
//     myfunc();
//     console.log(addTwo(2,3));
//     console.log(mul(2,3));
// }
// app();


// lexical scope
// function myApp()
// {
//     const myVar="value1";

//     function myFunc(){
//         const myVar="value59";
//         console.log("inside func",myVar);
//     }
//     console.log(myVar);
//     myFunc();
// }

// myApp();

