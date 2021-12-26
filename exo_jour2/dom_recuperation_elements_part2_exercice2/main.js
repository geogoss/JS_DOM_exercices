//1
let content = document.getElementsByTagName('div')
console.log(content[0].firstElementChild);
//2
let h3 = document.getElementsByTagName('h3')[1]
console.log(h3);
//3
console.log(h3.previousElementSibling);
//4
let contenu = document.getElementsByTagName('p')
console.log(contenu[1].nextElementSibling);
//5
let imp = document.getElementsByTagName('li')[0].parentElement
console.log(imp);
//6
let ul = document.getElementsByTagName('ul')
console.log(ul[0].parentElement.firstElementChild);
//7
let lastimp = document.getElementsByTagName('li')[3].nextElementSibling
console.log(lastimp);
//8
let exo8 = document.getElementsByTagName('p')[3].nextElementSibling.nextElementSibling
console.log(exo8);
//9
let span = document.getElementsByTagName('span')[1]
let spanPrenom = span.parentElement.nextElementSibling
console.log(spanPrenom);
//10
let primo = document.getElementsByTagName('b')[document.getElementsByTagName('b').length-1]
console.log(primo.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild);
//11
let no = document.querySelector('.grandParagraphe')
console.log(no);
//12
let exo12 = document.querySelectorAll('li')

exo12.forEach(element => {
    console.log(element);
});