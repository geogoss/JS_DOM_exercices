let myObject = {
    nom: 'nicolas',
    age: 18,
}

// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. En passant par la div dont l'id est object, récupère le h1 et le h2 dans un tableau du nom de myElements
let a = document.querySelector("object");
let b = a.querySelectorAll("h1, h2");
let myElements = Array.from(b)
console.log(a);




// // ### 2. Trouve une méthode pour créer un tableau des propriétés de ton objet

console.log(myObject);

let c = Object.values(myObject)
console.log(c);

// keys
// // ### 3. Créer une boucle qui va parcourir toutes les propriétés contenu dans ton object et qui pour chacune d'elle fait un console.log de la propriété

// b.forEach(e => {
//     console.log(e);
// });


// // ### 4. Efface ton console.log, trouve un moyen d'aller dans ton objet récupéré la valeur de chaque propriétés et fait un console log de ce que cela retourne
// console.log(myObject.nom);
// console.log(myObject.age);

// values

// // ### 5. Rajoute un count(compteur ou index comme tu l'entends) dans ta boucle

// b.forEach(e => {
//     console.count(e);
// });




// // ### 6. Sert toi de ce count/index pour parcourir ton tableau myElement dans ta boucle et d'y insirer ce qu'on te retourne a l'énoncé 4

// a.forEach(e => {
//     console.count(e);
// });

