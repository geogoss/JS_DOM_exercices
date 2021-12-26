// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de récupération de contenu text, mis à part si la manière est précicée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Affiche le contenu textuel du second h1
let a = document.getElementsByTagName("h1")
let b = Array.from(a)
console.log(b.length);

console.log(a[1].innerText);

// ### 2. Affiche le contenu textuel du dernier li
let c = document.getElementsByTagName("li")
let d = Array.from(c);
console.log(d.length);
console.log(c[3].innerText);

// ### 3. Affiche le contenu textuel du premier p en majuscule

let e = document.getElementsByTagName("p")[0];

console.log(e.innerText.toUpperCase());

// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule

d.forEach(e => {
    console.log(e.innerText.toUpperCase());
});
