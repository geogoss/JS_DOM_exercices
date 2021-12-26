// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de parent/enfant/premier element/dernier element/ etc.. PART 2*


// ### 1. Récupère et affiche le premier enfant de la dernière div
let a = document.getElementsByTagName("div")[2];
console.log(a);

let b = Array.from(a);
console.log(b.length);

let c = a.firstElementChild
console.log(c);


// ### 2. Récupère et affiche le dernier enfant de la dernière div
let d = a.lastElementChild
console.log(d.innerText);


// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le
let e = c.nextElementSibling.getElementsByTagName("i")[0]
console.log(e);


// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le
let f = d.firstElementChild
console.log(f);


// ### 5. Affiche l'élément parent de l'élément i
let g = e.parentElement
console.log(g);

// ### 6. affiche l'élément parent de l'élément b

let h = f.parentElement
console.log(h);

// ### 7. affiche l'élément suivant le premier enfant de la dernière div

let i = c.nextElementSibling
console.log(i);