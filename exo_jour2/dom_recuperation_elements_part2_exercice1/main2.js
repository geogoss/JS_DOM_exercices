// # Instructions :
// >*Mis à part si la manière est précicée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*
// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class
let a = Array.from(document.getElementsByClassName("tartine"))
console.log(a.length);
console.log(a[0].innerText);

let b = document.getElementsByClassName("tartine")[0].innerText
console.log(b);


// ### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"
let c = document.getElementById("toast")
console.log(c.innerText);

// ### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu, l'élément entier)
console.log(a[1]);
