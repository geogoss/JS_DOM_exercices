//1,2 & 3
let h1 = document.getElementsByTagName('h1')[1].innerText
let li = document.getElementsByTagName('ul')[0].lastElementChild.innerText
let para = document.getElementsByTagName('p')[0].innerText.toUpperCase()

console.log(h1);
console.log(li);
console.log(para);

//4

let ul = document.querySelectorAll('li')
let ullike = document.getElementsByTagName('li')

console.log(ul);
console.log(ullike);

ul.forEach(element => {
    console.log(element.innerText.toUpperCase());
});

Array.from(ullike).forEach(element => {
    console.log(element.innerText.toUpperCase());
});