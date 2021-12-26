let myObject = {
    nom: 'nicolas',
    age: 18,
    tet: "zdzd"
}


//Methode 1
// let myDiv = document.querySelector('div#object').children;

// Object.keys(myObject).forEach((key, count) => {
//     myDiv[count].innerText = myObject[key];
// });

// Methode 2
// let myDiv = Array.from(document.querySelector('div#object').children);
// myDiv.forEach((key, count) => {
//     myDiv[count].innerText = Object.values(myObject)[count];
// });

// ============================================
// correctif Ismael
// let myObject = {
//     nom: 'nicolas',
//     age: 18,
// }
////EXO_01
let exo01 = document.querySelector('#object').children
let myElement = [exo01[0], exo01[1]]
console.log(myElement);
////EXO02
console.log(Object.values(myObject));
////EXO_03
let i = 0
for (const propriete in myObject) {
    if (Object.hasOwnProperty.call(myObject, propriete)) {
        const element = myObject[propriete];
        console.log(myObject[propriete]);
        myElement[i];
        console.log(myElement[i]);
        i++
    }
}
////EXO_04
console.clear()
console.log(myObject.nom, myObject.age);
////EXO_05