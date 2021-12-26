// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère la div dont l'id est content avec un querySelector et affiche le résultat dans la console

let a = document.querySelector("#content")
console.log(a);

// ### 2. Récupère la div dont l'id est content avec un querySelectorAll et affiche le résultat dans la console
let b = document.querySelectorAll("#content")
console.log(b);

// ### 3. Récupère les li dont la class est important avec querySelector et affiche le résultat dans la console
let c = document.querySelector(".important")
console.log(c);
// ### 4. Récupère les li dont la class est important avec querySelectorAll et affiche le résultat dans la console
let d = document.querySelectorAll(".important")
console.log(d);

// ### 5. Affiche avec l'aide d'un foreach le contenu de chaque li avec la dernière lettre en majuscule 
 let e = document.querySelectorAll("li");
 e.forEach(e => {
     console.log(e.innerText.slice(0, -1) + e.innerText.charAt(e.innerText.length-1).toUpperCase());
 });

// ### 6. Récupère le p dont la class est "grandParagraphe" de la div id "content", tu dois ici utiliser un getElementById et un getElementsByClassName

let f = document.getElementById("content")
console.log(f);
let g = f.getElementsByClassName("grandParagraphe")[0]
console.log(g);