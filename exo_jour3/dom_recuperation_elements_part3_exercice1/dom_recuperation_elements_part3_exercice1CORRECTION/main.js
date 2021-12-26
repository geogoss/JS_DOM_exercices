//1
let h2 = document.querySelector('h2')
console.log(h2.innerText);
//2
h2.innerText = `Exercice 1`
console.log(h2.innerText);
//3
let p = h2.nextElementSibling
p.innerText = 'Exercice 1'
console.log(p.innerText);
//4
let exo4 = document.querySelector('section')
console.log(exo4.id);
//5
let h1 = document.querySelector('h1')
console.log(h1.className);
console.log(h1.classList);
//6
let h1all = document.querySelectorAll('h1')

h1all.forEach(element => {
    console.log(element.className);
});
//7
let input = document.querySelectorAll('input')[0]
console.log(input.attributes);
//8
console.log(input.getAttribute('type'));
// console.log(input.type);
// console.log(input.attributes.type.value);
//9
let input3 = document.querySelector('#inputPassword3')
input3.type = 'password'
console.log(input3.type);
//10
input.type = 'color'
console.log(input.type);