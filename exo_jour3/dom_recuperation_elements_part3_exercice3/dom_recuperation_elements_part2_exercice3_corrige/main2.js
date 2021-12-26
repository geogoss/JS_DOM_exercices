let myObject = {
    nom: 'nicolas',
    age: 18,
    test: "zdzd"
}

// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. En passant par la div dont l'id est object, récupère le h1 et le h2 dans un tableau du nom de myElements
let div = document.querySelector("#object").children;
let myElements = Array.from(div)
console.log(myElements);
myElements.forEach(e => {
    console.log(e);
});


// ### 2. Trouve une méthode pour créer un tableau des propriétés de ton objet
console.log(Object.values(myObject));


// ### 3. Créer une boucle qui va parcourir toutes les propriétés contenu dans ton object et qui pour chacune d'elle fait un console.log de la propriété
let i = 0
for (const propriete in myObject) {
    if (Object.hasOwnProperty.call(myObject, propriete)) {
        const element = myObject[propriete];
        console.log(myObject[propriete]);
        myElements[i]
        console.log(myElements[i]);
        i++
    }
}

let u = 0;
for (const propriete of myElements) {
    myElements[u]
        console.log(myElements[u]);
        u++
}




// ### 4. Efface ton console.log, trouve un moyen d'aller dans ton objet récupéré la valeur de chaque propriétés et fait un console log de ce que cela retourne
console.clear()
console.log(myObject.nom, myObject.age);

// ### 5. Rajoute un count(compteur ou index comme tu l'entends) dans ta boucle
myElements.forEach(key, count => {
    myElements[count].innerText = Object.values(myObject)[count]
});

// ### 6. Sert toi de ce count/index pour parcourir ton tableau myElement dans ta boucle et d'y insirer ce qu'on te retourne a l'énoncé 4



