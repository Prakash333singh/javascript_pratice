// let words = "neeTu";
// // console.log(words.toUpperCase());
// // console.log(words.toLowerCase());
// console.log(words[0]); // array of strings
// console.log(words.slice(0, 3));
// console.log(words.split("")); // this will return an array

// var array = [1, 2, 3];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// functions in javascripts
// var result = function sum(a, b, c, d) {
//     return a + b + c + d;
// }
// console.log(result(1, 2, 3, 4));

// var result = (a, b, c, d) => {
//     return a + b + c + d;
// }
// console.log(result(1, 2, 3, 4));


// let sum = (a, b, c, d) => a + b + c + d;
// console.log(sum(1, 2, 3, 4));


var calc = function (fx, a, b) {
    return fx(a, b);
}
var sum = function (x, y) {
    return x + y;
}

console.log(calc(sum, 3, 4));


const object = {
    a: 1,
    b: 2,
    c: 3
};
for (const property in object) {
    console.log(`${property} :${
        object[property]
    }`);
}

var person = {
    name: "Prakash",
    age: 30,
    address: "street 10",
    phone: 999999999999
}
var anotherPerson = {
    ... person
};
anotherPerson.name = "jack";
console.log(person.name);
console.log(anotherPerson);
