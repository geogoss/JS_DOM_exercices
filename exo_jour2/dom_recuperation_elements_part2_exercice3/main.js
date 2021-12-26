//1
let divContent = document.querySelector('#content')
console.log(divContent);
//2
let content = document.querySelectorAll('#content')
console.log(content);
//3
let li = document.querySelector('.important')
console.log(li);
//4
let li2 = document.querySelectorAll('.important')
console.log(li2);
//5

let liall = document.querySelectorAll('li')

liall.forEach(element => {
    console.log(element.innerText.slice(0, -1) + element.innerText.charAt(element.innerText.length-1).toUpperCase());
});

//6
let p = document.getElementById('content')
console.log(p.getElementsByClassName('grandParagraphe')[0]);