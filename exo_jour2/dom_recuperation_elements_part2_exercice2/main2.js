// # Instructions :
// >*Les exercices suivants doivent être résolus en utilisant getElementsByTagName*, mis à part si il est précisé d'utiliser autre chose*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Affiche le h3 qui est le premier enfant de la div content
let a = document.getElementsByTagName("div")[0].firstElementChild
console.log(a);


// ### 2. Affiche le titreNiv3
let b = document.getElementsByTagName("h3")[1]
console.log(b);

// ### 3. Affiche l'élément qui précède le titreNiv3
console.log(b.previousElementSibling);


// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling
let c = document.getElementsByClassName("petitParagraphe")[0].nextElementSibling
console.log(c);


// ### 5. Affiche le parent des éléments ayant comme class "important" 
let d = document.getElementsByClassName("important")[0].parentElement
console.log(d);


// ### 6. Affiche le premier enfant, du parent de "listElements"
let e = d.parentElement.firstElementChild

console.log(e);


// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"

let f = document.getElementsByClassName("important")[3].nextElementSibling
console.log(f);


// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
let g = document.getElementById("textGeneral");
console.log(g.nextElementSibling.nextElementSibling);


// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)

let h = footer.getElementsByTagName("span")[0];
console.log(h);

console.log(h.parentElement.nextElementSibling.firstElementChild);

// ### 10. En partant de Nicolas, affiche Primo
let i = footer.getElementsByTagName("b")[1]
console.log(i);
console.log(i.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild);


// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"
let j = document.querySelector(".grandParagraphe")
console.log(j);

// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle
let k = document.querySelectorAll("li");
console.log(k);

k.forEach(e => {
    console.log(e);
});
