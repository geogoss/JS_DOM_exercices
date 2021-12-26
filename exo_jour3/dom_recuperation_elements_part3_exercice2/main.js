// // # Exercice d'observation :
// // >*En utilisant querySelector et querySelectorAll, sert toi des class du fichier style.css et rien d'autre !
// // >*Cherche des methodes pour résoudre les énoncés suivants :*

// // ## Partie 1 Ajout de contenu
// // ### 1. Dans le h1 ajoute le texet suivant : Les attributs class et id

// let h1 = document.getElementsByTagName("h1")[0];
// console.log(h1);

// h1.innerText = "Les attributs class et id"

// // ### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A

// let h2 = document.querySelector("h2");
// console.log(h2);

// h2.innerText = "Exercice 2 partie A"


// // ### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B

// let h2suite = document.querySelectorAll("h2")[1];
// h2suite.innerText = "Exercice 2 partie B"

// console.log(h2suite);


// // ### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> 

// let p = document.querySelector("p");
// p.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>";
// console.log(p);



// // ### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide

// let p2 = document.querySelectorAll("p")[1];
// p2.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";
// console.log(p2);


// // ------------------------------------------------------------------------------
// // ## Partie 2.1 Ajout d'attribut et de leurs valeurs
// // ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"
// h1.setAttribute('id', 'bigTitle')
// console.log(h1.attributes);
// // comment fait on pour voir le nom

// // ### 7. Rajoute l'attribut class a la div avec comme valeur "container"

// let div = document.querySelector("div");
// console.log(div);
// div.setAttribute("class", 'container')
// // ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"

// let tous = document.querySelectorAll("h2")

// tous.forEach(e => {
//     e.setAttribute("class", "title")
// });

// tous.forEach(e => {
//     console.log(e);
// });

// // ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"

// let y = document.querySelectorAll("p");

// console.log(y);

// y.forEach(e => {
//     e.setAttribute("class", "text")
// });

// y.forEach(e => {
//     console.log(e);
// });


// // ## Partie 2.2 Ajout d'attribut et de leurs valeurs
// // ### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom border-black padding

// let z = document.querySelector("section");
// console.log(z);

// z.setAttribute("class", "margin-bottom border-black padding");
// console.log(z);



// // ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding

// let g = document.querySelectorAll("section")[1];
// g.setAttribute("class", "margin-top border-black padding");

// console.log(g);

// // ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et une largueur de 20px

// let f = document.querySelectorAll("section")[1];
// // f.setAttribute("style", "background-color: blue" )
// console.log(f.lastElementChild);
// let ff = f.lastElementChild;
// ff.setAttribute("style", "background-color: blue; border: 1px; height: 20px; width: 20px;")

// console.log(ff);





// =============================================
// correctif Louis
//Dom recup elements part 3 exo2
// exo-1
let exo1 = document.querySelector('h1');
exo1.innerText = 'Les attributs class et id';
console.log(exo1);

//exo-2
let exo2 = document.querySelector('h2');
exo2.innerText = 'Exercice 2 partie A'
console.log(exo2);

//exo3
let exo3 = document.querySelectorAll('h2')[1];
exo3.innerText = 'Exercice 2 partie B'
console.log(exo3);

//exo4
let exo4 = document.querySelector('p');
exo4.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>";
console.log(exo4);

//exo5
let exo5 = document.querySelectorAll('p')[1];
exo5.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";
console.log(exo5);
// ============================================
// correctif Geoffrey
// ## Partie 2.1 Ajout d'attribut et de leurs valeurs
// ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"

let h1 = document.querySelector("h1");
h1.setAttribute("id", "bigTitle")

console.log(h1);

// ### 7. Rajoute l'attribut class a la div avec comme valeur "container"

let div = document.querySelector("div");

div.setAttribute("class", "container");
console.log(div);

// ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"

let h2 = document.querySelectorAll("h2");

h2.forEach(e => {
    e.setAttribute("class", "title")
    console.log(e);
});

// ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"

let p = document.querySelectorAll("p")

p.forEach(e => {
    e.setAttribute("class", "text")
    console.log(e);
});

// ============================================
// correctif Margaux
// ## Partie 2.2 Ajout d'attribut et de leurs valeurs
// ### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom, border-black, padding

let section = document.querySelector('section')

section.className='margin-bottom border-black padding'


console.log(section.className);



// ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding
let secondsection = document.querySelectorAll('section')
secondsection[1].className='margin-top border-black padding'

console.log(secondsection[1]);



// ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, 
// une bordure de ton choix, une hauteur de 20px et une largueur de 20px

secondsection[1].lastElementChild.setAttribute('style', 'border: solid red 1px; height: 20px; width: 20px; background-color: blue;')

console.log(secondsection[1].lastElementChild);

