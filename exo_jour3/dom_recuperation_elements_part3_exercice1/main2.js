// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*
// > Fais des console.log pour chaque exercice afin de montrer le résultat!
// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text

let h2 = document.querySelector("h2")
console.log(h2.innerText);

// ### 2. Trouve le moyen de modifier sa valeur par "Exercice 1"
h2.innerText = "Exercice1"
console.log(h2.innerText);


// ### 3. Récupère l'élément p juste en dessous ce h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.
let p = h2.nextElementSibling
console.log(p.innerText);
p.innerText ="Exercice1"
console.log(p.innerText);

// ### 4. Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console
let section1 = document.querySelector("section");

console.log(section1.id);
let test = section1.nextElementSibling
console.log(test.classList);


// ### 5. Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)
let h1 = document.querySelector("h1");
console.log(h1.className);
console.log(h1.classList);


// ### 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1
let a = document.querySelectorAll("h1")
console.log(a);
a.forEach(e => {
    console.log(e.className);
});


// ### 7. Trouve une propriété pour afficher tous les attributs du premier input
let input = document.querySelectorAll("input")
console.log(input);
input.forEach(e => {
    console.log(e.attributes);
});
let input2 = document.querySelectorAll("input")[0]
console.log(input2.attributes);


// ### 8. Trouve le moyen de récupérer la valeur dans l'attribut type du premier input

console.log(input2.type);


// ### 9. Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"
let b = document.querySelector("#inputPassword3");
b.type = "password"
console.log(b.type);

// ### 10. Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"
let c = document.querySelector("input");
c.type = "color"
console.log(c.type);