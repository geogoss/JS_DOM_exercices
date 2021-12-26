// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de parent/enfant/premier element/dernier element/ etc.. PART 1*

// ### 1. Stock la balise body dans une variable du nom de "myBody"
let myBody = document.getElementsByTagName("body")[0]
console.log(myBody);

// ### 2. Trouve une méthode pour récuperer le premier élément de "myBody" et affiche le dans un console.log
let a = myBody.firstElementChild
console.log(a);


// ### 3. Trouve une méthode pour récuperer le dernièr élément de "myBody" et affiche le dans un console.log
let b = myBody.lastElementChild
console.log(b);


// ### 4. Trouve une méthode pour récuperer tous les enfants de la premiere div puis stock dans une variable "exo4" et affiche la dans un console.log
let c = myBody.getElementsByTagName("div")[0]
console.log(c);
let exo4 = myBody.getElementsByTagName('div')[0].children
console.log(exo4);

// ### 5. Récupère le premier li, puis trouve une méthode JS pour afficher l'élément suivant( c'est a dire le second li ) et affiche le résultat dans un CL

let d = document.getElementsByTagName("li")[0]
console.log(d.innerText);
let e = d.nextElementSibling
console.log(e.innerText);


// ### 6. Récupère le second élément puis trouve une méthode JS pour afficher l'élément précédant( c'est a dire le premier li ) et affiche le résultat dans un CL

let f = e.previousElementSibling
console.log(f.innerText);


