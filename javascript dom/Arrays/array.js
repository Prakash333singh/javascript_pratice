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
const arr = ['March', 'Jan', 'Feb', 'Dec'];
arr.sort(compareFn);
function compareFn(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
}
console.log(arr);
