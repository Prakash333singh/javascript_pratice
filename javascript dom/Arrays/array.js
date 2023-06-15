// let nums = [1, 2, 3, 4];
// let letters = ["a", "c", "d", "g"];
// let concated = nums.concat(letters);
// console.log(... nums, ... letters);
// console.log(concated);

// let salaries = [300, 4000, 5000, 8000];
// let newsalaries = salaries.map(salary => {
//     let incrementedAmount = salary / 2;
//     return salary + incrementedAmount;
// })

// console.log(newsalaries);

// let numbers = [
//     6,
//     11,
//     18,
//     10,
//     12,
//     16
// ]

// console.log(numbers.slice(2, 5));//non mutating
// console.log(numbers);
// console.log(numbers.splice(2, 2));//mutating

// console.log(numbers);

// var numbers = [1, 2, 3];


// value = numbers.map(item => item * 2)
// console.log(value);
// console.log(numbers);

// users = [
//     {
//         name: "adam"
//     }, {
//         name: "bill"
//     }, {
//         name: "johnhill"
//     }
// ];
// value = users.map(item => item.name.length);
// console.log(value);

// const ages = [
//     25,
//     30,
//     35,
//     40,
//     45
// ];

// const ageGreat = ages.filter((e) => (e > 30));
// console.log(ageGreat);

// const r = ages.reduce((acc, num) => num + acc, 0)
// console.log(r)

// const array1 = [
//     5,
//     12,
//     8,
//     130,
//     44
// ];

// const found = array1.find(el => el > 10);
// console.log(found);

// const res = array1.some(el => el > 10);
// console.log(res);

// const arr1 = [
//     0,
//     1,
//     2,
//     [
//         3, 4
//     ]
// ];
// console.log(arr1.flat());

// const arr2 = [
//     0,
//     1,
//     2,
//     [
//         [
//             [3, 4]
//         ]
//     ]
// ];

// console.log(arr2.flat(2));
// const arr = ['March', 'Jan', 'Feb', 'Dec'];
// arr.sort(compareFn);
// function compareFn(a, b) {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     // a must be equal to b
//     return 0;
// }
// console.log(arr);


// console.log("hello");

// let arr=[1,2,3,4];
// console.log(arr.reverse());


// let content = document.getElementById('content');

// console.log(content.innerHTML);

// console.log(content.innerText);

// let form = document.querySelector(".testForm");
// let inputPassword =document.querySelector(".inputPass");
// let email=document.querySelector(".email");

// let requiredPasswordPattern ="/^[A-Za-Z] {6,12}$/";

// form.addEventListener("keyup",(e) =>{
//     if(requiredPasswordPattern.test(e.inputPassword)){
//         console.log("passed");
//     }
//     else{
//         console.log("failed");
//     }
// });

// form.addEventListener("submit", (e) =>{
//     e.preventDefault();
//     console.log(inputPassword.value)
//     console.log("clicked");
//     let password = inputPassword.value;
//     let result =requiredPasswordPattern.match(password);

//     if (result == true){
//         console.log("your password validated successfully");
//     }
//     else{
//         console.log("try again with new password");
//     }
// });


// let admins = ['john', 'paul', 'Neha', 'harry'];
// console.log(admins.slice(-2))

//Ouput[('Neha', 'harry')];

// const arr=[1,4,7,6,8];
// console.log(arr.splice(2,4));
// const arr=[1,4,7,6,8];
// console.log(arr.splice(2,2))
// console.log(arr);
// arr.splice(1,3,14,15,16);
// console.log(arr);

// const arr = [1, 4, 7, 6, 8];
// console.log(arr.slice(-2));

// let nums=[1,2,3,4,5,6];
// let updateArray = nums.map(e => e*2);
// console.log(updateArray);

// const arr = [10 ,40,70,60,80];
// console.log(arr.filter(e=> e>75));


// let nums = [2,3,5,6,8,6,4,8];
// console.log(nums.reduce((acc,num)=>num+acc,0));

// let nums = [1, 2, 4, 5, [6, [8]], [9, 0]];

// let res1 = nums.flat(); //[1,2,4,5,6,[8],9,0]

// let res2 = nums.flatMap((elem) => elem);

// console.log(res1, res2);

// let arr = [1, 2, 3, 4];
// console.log(arr.splice(1,2));
// let result = arr.splice(1, 2).pop();

// console.log(result);