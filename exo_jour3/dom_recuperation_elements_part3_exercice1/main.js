// ### 1. Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text
let h2 = document.querySelector("h2");
console.log(h2.innerText);

// ### 2. Trouve le moyen de modifier sa valeur par "Exercice 1"

h2.innerText = `Exercice 1`
console.log(h2.innerText);

// ### 3. Récupère l'élément p juste en dessous ce h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.

let p = h2.nextElementSibling
console.log(p);

p.innerText ="h2.innerText = `Exercice 1`console.log(h2.innerText)"
console.log(p);

// ### 4. Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console
let section = document.querySelector("section")
console.log(section.className.innerText);



// ### 5. Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)

let exo5 = document.querySelector("h1");
console.log(exo5.className);

let exo5suite = document.getElementsByTagName("h1")[0];
console.log(exo5suite.className);


// ### 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1

let exo6 = document.querySelectorAll("h1");
console.log(exo6);
exo6.forEach(e => {
    console.log(e.className);
});



// ### 7. Trouve une propriété pour afficher tous les attributs du premier input

let exo7 = document.getElementsByTagName("input")[0];
console.log(exo7.attributes);


// ### 8. Trouve le moyen de récupérer la valeur dans l'attribut type du premier input

console.log(exo7.attributes.type);


// ### 9. Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"

let exo9 = document.getElementById("inputPassword3");
console.log(exo9);


// ### 10. Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"

// let x = exo7.removeNamedItem("email")

// console.log(x);


// let inputChangé = exo7.remove("style");
// exo7.attributes.replace("email", "color")

// console.log(inputChangé);



// square.setAttribute('style', 'margin: 350px;')

// square.classList.replace('round', 'round2')
