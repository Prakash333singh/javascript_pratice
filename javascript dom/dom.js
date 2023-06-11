// console.log(document.URL)
// let resultElement = document.querySelector('p');
// let parakash = document.querySelector('a');

// console.log(resultElement);
// console.log(parakash);
// geting aaatributes
// console.log(parakash.getAttribute('href'))

// setting attributes
// parakash.setAttribute('href', "www.instagram.com")

// parakash.innerText = "hello babe";
// parakash.innerHTML = "hello";


// console.log("hello");

// let neetu = document.querySelectorAll('p');
// console.log(neetu);


// add remove and replace class of element
// let heading = document.querySelector('h1');
// console.log(heading)

// heading.classList.add('newclass');
// heading.classList.remove('newclass');

// heading.classList.replace("prakash", "prakash77");


// parent ,children,sibling elemnts

// let parentElement = document.querySelector('.content')
// // all childern of parent
// console.log(parentElement.children);


// console.log(Array.from(parentElement.children));


// Array.from(parentElement.children).forEach(function (element) {
//     element.classList.add("coders");
// })

// console.log(Array.from(parentElement.children));

// let elements = document.querySelectorAll('li');
// elements.forEach(function (element) {
//     element.addEventListener('click', function (e) {
//         console.log("clicked");
//         // e.target.style.textDecoration = "line-through";
//         // console.log(e.target);
//         e.target.remove();
//     })

// })


// const ul = document.querySelector('ul');
// let button = document.querySelector('.clickMe');

// button.addEventListener('click', function () {
//     let li = document.createElement('li');
//     li.textContent = "something new aaded";
//     ul.append(li);
// })
// event bubleling and deligation
// const ul = document.querySelector('ul');
// ul.addEventListener("click", (e) => {

//     console.log("inside UL")
//     if (e.target.nodeName == "LI") {
//         e.target.remove();
//     }
// })

// form
let form = document.querySelector('.sign-up-form');
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(email.value, password.value);
    console.log(form.email.value, form.password.value)
})
