// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, sert toi des class du fichier style.css et rien d'autre !
// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ## Partie 1 Ajout de contenu
// ### 1. Dans le h1 ajoute le texet suivant : Les attributs class et id

let h1 = document.querySelector("h1");
h1.innerText = "Les attributs class et id"

// ### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A
let h2 = document.querySelector("h2");
h2.innerText = "Exercice 2 partie A"

// ### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B
let h2bis = document.querySelectorAll("h2")[1]
h2bis.innerText = "Exercice 2 partie B"


// ### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> 
let p = document.querySelector("p");
p.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> "



// ### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide
let p2 = document.querySelectorAll("p")[1]
p2.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"


// ## Partie 2.1 Ajout d'attribut et de leurs valeurs
// ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"
let a = document.querySelector("h1");
h1.id = "bigTitle"
console.log(h1.id);

// ### 7. Rajoute l'attribut class a la div avec comme valeur "container"
// let b = document.querySelector("div");
// b.class = "container"
// console.log(b.class);
let c = document.querySelector("div");
c.setAttribute("class", "container");
console.log(c.className);

// ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"
let d = document.querySelectorAll("h2");
d.forEach(e => {
    e.class = "title"
    console.log(e.class);
});
d.forEach(e => {
    e.setAttribute("class", "title")
    console.log(e);
});

// ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"
let f = document.querySelectorAll("p");
f.forEach(e=>{
    e.class = "text";
    console.log(e.class);
})

// ## Partie 2.2 Ajout d'attribut et de leurs valeurs
// ### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom border-black padding
let section = document.querySelector("section");
section.className = "margin-bottom border-black padding"
console.log(section);
console.log(section.className);

// ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding

let section2 = document.querySelectorAll("section")[1];
section2.className = "margin-top border-black padding"
console.log(section2);
console.log(section2.className);



// ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et une largueur de 20px

let g = section2.lastElementChild
g.style = "background-color: blue; border: 1px solid; height: 20px; width: 20px"
