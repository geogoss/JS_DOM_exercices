//1
let myBody = document.body
console.log(myBody);

//2
let first = myBody.firstElementChild
console.log(first);

//3
let last = myBody.lastElementChild
console.log(last);

//4
let exo4 = document.getElementsByTagName('div')[0].children

console.log(exo4);

//5
let li = document.getElementsByTagName('li')[0]
let nextLi = li.nextElementSibling

console.log(li);
console.log(nextLi);

//6
previousLi = nextLi.previousElementSibling
console.log(previousLi);