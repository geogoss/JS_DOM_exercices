//1
let div = document.getElementsByTagName('div')[2]

let first = div.firstElementChild

console.log(first);

//2
let last = div.lastElementChild
console.log(last);

//3
console.log(div.firstElementChild.nextElementSibling.firstElementChild);

//4
console.log(div.lastElementChild.firstElementChild);

//5
let i = div.getElementsByTagName('i')[0]
console.log(i.parentElement);

//6
let b = div.getElementsByTagName('b')[0]
console.log(b.parentElement);

//7
console.log(div.firstElementChild.nextElementSibling);