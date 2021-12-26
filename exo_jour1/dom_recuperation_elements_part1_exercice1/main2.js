// # Instructions :
// >*En utilisant la methode getElementsByTagName*
// ### 1. Stock tous les titres h1 dans une variable et affiche le contenu de cette variable dans un console.log 
let h1 = document.getElementsByTagName("h1")
console.log(h1);
// Array.from(h1)
Array.from(h1).forEach(e => {
    console.log(e);
});


// ### 2. Après avoir récupéré tous les h1, stock chaque sous titre h3 dans des variables différentes et affiches leur contenu dans un console.log différent

let h3 = document.getElementsByTagName("h3")
let h3Tab = Array.from(h3)
console.log(h3Tab.length);
let a = h3Tab[0]
let b = h3Tab[1]
let c = h3Tab[2]
console.log(a, b, c);

// ### 3. Après avoir récupéré tous les paragraphe, stock le second paragraphe et affiche dans un console.log
let d = h1[1]
console.log(d);

// ### 4. Après avoir récupéré tous les li, stock le 3eme li et affiche le dans un console.log

let li = document.getElementsByTagName("li")
let li3 = li[2]
console.log(li3);
